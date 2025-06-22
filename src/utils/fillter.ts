type QueryParams = {
    search?: string;
    sort?: string;
    page?: string;
    limit?: string;
    [key: string]: any;
};

type PrismaFilterOptions = {
    query: QueryParams;
    searchableFields?: string[];
    filterableFields?: string[];
};

export function buildPrismaQuery({
    query,
    searchableFields = [],
    filterableFields = [],
}: PrismaFilterOptions) {
    const where: any = {};

    // Search
    if (query.search && searchableFields.length > 0) {
        where.OR = searchableFields.map((field) => ({
            [field]: {
                contains: query.search,
                mode: 'insensitive',
            },
        }));
    }

    // Filtering
    for (const key in query) {
        if (
            filterableFields.includes(key) &&
            typeof query[key] === 'string' &&
            query[key] !== ''
        ) {
            where[key] = query[key];
        }
    }

    // Sorting
    let orderBy: any = { createdAt: 'desc' }; // default
    if (query.sort) {
        const [field, direction = 'asc'] = query.sort.split(':');
        orderBy = { [field]: direction.toLowerCase() === 'desc' ? 'desc' : 'asc' };
    }

    // Pagination
    const page = parseInt(query.page || '1', 10);
    const limit = parseInt(query.limit || '10', 10);
    const skip = (page - 1) * limit;

    return {
        where,
        orderBy,
        skip,
        take: limit,
    };
}
