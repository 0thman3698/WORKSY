export type QueryParams = {
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
        const searchTerm = query.search.trim();
        if (searchTerm.length > 0) {
            filters.OR = searchableFields.map((field) => ({
                [field]: {
                    contains: searchTerm,
                    mode: 'insensitive',
                },
            }));
        }
    }

    // Filtering
    for (const key of filterableFields) {
        const value = query[key];
        if (typeof value === 'string' && value.trim() !== '') {
            filters[key] = value.trim();
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
    let page = parseInt(query.page || '1', 10);
    let take = parseInt(query.limit || '10', 10);

    if (isNaN(page) || page < 1) page = 1;
    if (isNaN(take) || take < 1) take = 10;

    const skip = (page - 1) * take;

    return {
        filters: Object.keys(filters).length > 0 ? filters : undefined,
        orderBy,
        skip,
        take,
    };
}

