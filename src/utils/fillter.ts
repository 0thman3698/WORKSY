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
    const filters: any = {};

    // Search (OR على searchable fields)
    if (query.search && searchableFields.length > 0) {
        filters.OR = searchableFields.map((field) => ({
            [field]: {
                contains: query.search,
                mode: 'insensitive',
            },
        }));
    }

    // Filtering
    for (const key of filterableFields) {
        const value = query[key];
        if (typeof value === 'string' && value.trim() !== '') {
            filters[key] = value;
        }
    }

    // Sorting
    let orderBy: any = undefined;
    if (query.sort) {
        const [field, direction = 'asc'] = query.sort.split(':');
        orderBy = {
            [field]: direction.toLowerCase() === 'desc' ? 'desc' : 'asc',
        };
    }

    // Pagination
    const page = parseInt(query.page || '1', 10);
    const take = parseInt(query.limit || '10', 10);
    const skip = (page - 1) * take;

    return {
        filters: Object.keys(filters).length > 0 ? filters : undefined,
        orderBy,
        skip,
        take,
    };
}
