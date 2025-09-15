import { buildPrismaQuery, QueryParams } from './fillter';

describe('buildPrismaQuery', () => {
    describe('Search functionality', () => {
        it('should build search filters for single field', () => {
            const query: QueryParams = { search: 'test' };
            const result = buildPrismaQuery({
                query,
                searchableFields: ['name']
            });

            expect(result.filters).toBeDefined();
            expect(result.filters.OR).toHaveLength(1);
            expect(result.filters.OR[0].name).toEqual({
                contains: 'test',
                mode: 'insensitive'
            });
        });

        it('should build search filters for multiple fields', () => {
            const query: QueryParams = { search: 'john' };
            const result = buildPrismaQuery({
                query,
                searchableFields: ['name', 'email', 'description']
            });

            expect(result.filters).toBeDefined();
            expect(result.filters.OR).toHaveLength(3);
            expect(result.filters.OR[0].name).toEqual({
                contains: 'john',
                mode: 'insensitive'
            });
            expect(result.filters.OR[1].email).toEqual({
                contains: 'john',
                mode: 'insensitive'
            });
            expect(result.filters.OR[2].description).toEqual({
                contains: 'john',
                mode: 'insensitive'
            });
        });

        it('should not create search filters when no search term', () => {
            const query: QueryParams = {};
            const result = buildPrismaQuery({
                query,
                searchableFields: ['name', 'email']
            });

            expect(result.filters).toBeUndefined();
        });

        it('should not create search filters when no searchable fields', () => {
            const query: QueryParams = { search: 'test' };
            const result = buildPrismaQuery({
                query,
                searchableFields: []
            });

            expect(result.filters).toBeUndefined();
        });

        it('should handle empty search term', () => {
            const query: QueryParams = { search: '' };
            const result = buildPrismaQuery({
                query,
                searchableFields: ['name']
            });

            expect(result.filters).toBeUndefined();
        });

        it('should handle whitespace-only search term', () => {
            const query: QueryParams = { search: '   ' };
            const result = buildPrismaQuery({
                query,
                searchableFields: ['name']
            });

            expect(result.filters).toBeUndefined();
        });
    });

    describe('Filtering functionality', () => {
        it('should build filters for single filterable field', () => {
            const query: QueryParams = { status: 'active' };
            const result = buildPrismaQuery({
                query,
                filterableFields: ['status']
            });

            expect(result.filters).toBeDefined();
            expect(result.filters.status).toBe('active');
        });

        it('should build filters for multiple filterable fields', () => {
            const query: QueryParams = {
                status: 'active',
                role: 'admin',
                category: 'tech'
            };
            const result = buildPrismaQuery({
                query,
                filterableFields: ['status', 'role', 'category']
            });

            expect(result.filters).toBeDefined();
            expect(result.filters.status).toBe('active');
            expect(result.filters.role).toBe('admin');
            expect(result.filters.category).toBe('tech');
        });

        it('should ignore non-filterable fields', () => {
            const query: QueryParams = {
                status: 'active',
                invalidField: 'value'
            };
            const result = buildPrismaQuery({
                query,
                filterableFields: ['status']
            });

            expect(result.filters).toBeDefined();
            expect(result.filters.status).toBe('active');
            expect(result.filters.invalidField).toBeUndefined();
        });

        it('should ignore empty filter values', () => {
            const query: QueryParams = {
                status: 'active',
                role: '',
                category: '   '
            };
            const result = buildPrismaQuery({
                query,
                filterableFields: ['status', 'role', 'category']
            });

            expect(result.filters).toBeDefined();
            expect(result.filters.status).toBe('active');
            expect(result.filters.role).toBeUndefined();
            expect(result.filters.category).toBeUndefined();
        });

        it('should handle non-string filter values', () => {
            const query: QueryParams = {
                status: 'active',
                count: 5,
                isActive: true
            };
            const result = buildPrismaQuery({
                query,
                filterableFields: ['status', 'count', 'isActive']
            });

            expect(result.filters).toBeDefined();
            expect(result.filters.status).toBe('active');
            expect(result.filters.count).toBeUndefined();
            expect(result.filters.isActive).toBeUndefined();
        });
    });

    describe('Combined search and filtering', () => {
        it('should combine search and filter conditions', () => {
            const query: QueryParams = {
                search: 'john',
                status: 'active'
            };
            const result = buildPrismaQuery({
                query,
                searchableFields: ['name', 'email'],
                filterableFields: ['status']
            });

            expect(result.filters).toBeDefined();
            expect(result.filters.OR).toHaveLength(2);
            expect(result.filters.status).toBe('active');
        });

        it('should handle only search when no filters', () => {
            const query: QueryParams = { search: 'test' };
            const result = buildPrismaQuery({
                query,
                searchableFields: ['name'],
                filterableFields: ['status']
            });

            expect(result.filters).toBeDefined();
            expect(result.filters.OR).toHaveLength(1);
            expect(result.filters.status).toBeUndefined();
        });

        it('should handle only filters when no search', () => {
            const query: QueryParams = { status: 'active' };
            const result = buildPrismaQuery({
                query,
                searchableFields: ['name'],
                filterableFields: ['status']
            });

            expect(result.filters).toBeDefined();
            expect(result.filters.OR).toBeUndefined();
            expect(result.filters.status).toBe('active');
        });
    });

    describe('Sorting functionality', () => {
        it('should build ascending sort', () => {
            const query: QueryParams = { sort: 'name' };
            const result = buildPrismaQuery({ query });

            expect(result.orderBy).toEqual({ name: 'asc' });
        });

        it('should build descending sort', () => {
            const query: QueryParams = { sort: 'name:desc' };
            const result = buildPrismaQuery({ query });

            expect(result.orderBy).toEqual({ name: 'desc' });
        });

        it('should build ascending sort with explicit direction', () => {
            const query: QueryParams = { sort: 'name:asc' };
            const result = buildPrismaQuery({ query });

            expect(result.orderBy).toEqual({ name: 'asc' });
        });

        it('should handle uppercase direction', () => {
            const query: QueryParams = { sort: 'name:DESC' };
            const result = buildPrismaQuery({ query });

            expect(result.orderBy).toEqual({ name: 'desc' });
        });

        it('should default to ascending for invalid direction', () => {
            const query: QueryParams = { sort: 'name:invalid' };
            const result = buildPrismaQuery({ query });

            expect(result.orderBy).toEqual({ name: 'asc' });
        });

        it('should return undefined when no sort', () => {
            const query: QueryParams = {};
            const result = buildPrismaQuery({ query });

            expect(result.orderBy).toBeUndefined();
        });

        it('should handle empty sort', () => {
            const query: QueryParams = { sort: '' };
            const result = buildPrismaQuery({ query });

            expect(result.orderBy).toBeUndefined();
        });
    });

    describe('Pagination functionality', () => {
        it('should build pagination with default values', () => {
            const query: QueryParams = {};
            const result = buildPrismaQuery({ query });

            expect(result.skip).toBe(0);
            expect(result.take).toBe(10);
        });

        it('should build pagination with custom page and limit', () => {
            const query: QueryParams = { page: '3', limit: '20' };
            const result = buildPrismaQuery({ query });

            expect(result.skip).toBe(40); // (3-1) * 20
            expect(result.take).toBe(20);
        });

        it('should handle first page', () => {
            const query: QueryParams = { page: '1', limit: '5' };
            const result = buildPrismaQuery({ query });

            expect(result.skip).toBe(0);
            expect(result.take).toBe(5);
        });

        it('should handle invalid page numbers', () => {
            const query: QueryParams = { page: 'invalid', limit: '10' };
            const result = buildPrismaQuery({ query });

            expect(result.skip).toBe(0);
            expect(result.take).toBe(10);
        });

        it('should handle invalid limit numbers', () => {
            const query: QueryParams = { page: '2', limit: 'invalid' };
            const result = buildPrismaQuery({ query });

            expect(result.skip).toBe(10); // (2-1) * 10
            expect(result.take).toBe(10); // default
        });

        it('should handle zero page', () => {
            const query: QueryParams = { page: '0', limit: '10' };
            const result = buildPrismaQuery({ query });

            expect(result.skip).toBe(0); // 0 → default 1
            expect(result.take).toBe(10);
        });

        it('should handle negative page', () => {
            const query: QueryParams = { page: '-1', limit: '10' };
            const result = buildPrismaQuery({ query });

            expect(result.skip).toBe(0); // negative → default 1
            expect(result.take).toBe(10);
        });

        it('should handle zero limit', () => {
            const query: QueryParams = { page: '2', limit: '0' };
            const result = buildPrismaQuery({ query });

            expect(result.skip).toBe(10); // (2-1) * default 10
            expect(result.take).toBe(10);
        });

        it('should handle negative limit', () => {
            const query: QueryParams = { page: '2', limit: '-5' };
            const result = buildPrismaQuery({ query });

            expect(result.skip).toBe(10); // (2-1) * default 10
            expect(result.take).toBe(10);
        });
    });

    describe('Complete functionality', () => {
        it('should handle all features together', () => {
            const query: QueryParams = {
                search: 'john',
                status: 'active',
                role: 'admin',
                sort: 'name:desc',
                page: '2',
                limit: '15'
            };
            const result = buildPrismaQuery({
                query,
                searchableFields: ['name', 'email'],
                filterableFields: ['status', 'role']
            });

            expect(result.filters).toBeDefined();
            expect(result.filters.OR).toHaveLength(2);
            expect(result.filters.status).toBe('active');
            expect(result.filters.role).toBe('admin');
            expect(result.orderBy).toEqual({ name: 'desc' });
            expect(result.skip).toBe(15); // (2-1) * 15
            expect(result.take).toBe(15);
        });

        it('should return undefined filters when no conditions', () => {
            const query: QueryParams = { sort: 'name', page: '1', limit: '10' };
            const result = buildPrismaQuery({
                query,
                searchableFields: ['name'],
                filterableFields: ['status']
            });

            expect(result.filters).toBeUndefined();
            expect(result.orderBy).toEqual({ name: 'asc' });
            expect(result.skip).toBe(0);
            expect(result.take).toBe(10);
        });
    });

    describe('Edge cases', () => {
        it('should handle empty query object', () => {
            const query: QueryParams = {};
            const result = buildPrismaQuery({ query });

            expect(result.filters).toBeUndefined();
            expect(result.orderBy).toBeUndefined();
            expect(result.skip).toBe(0);
            expect(result.take).toBe(10);
        });

        it('should handle query with only undefined values', () => {
            const query: QueryParams = {
                search: undefined,
                status: undefined,
                sort: undefined,
                page: undefined,
                limit: undefined
            };
            const result = buildPrismaQuery({
                query,
                searchableFields: ['name'],
                filterableFields: ['status']
            });

            expect(result.filters).toBeUndefined();
            expect(result.orderBy).toBeUndefined();
            expect(result.skip).toBe(0);
            expect(result.take).toBe(10);
        });

        it('should handle query with null values', () => {
            const query: QueryParams = {
                search: null as any,
                status: null as any,
                sort: null as any,
                page: null as any,
                limit: null as any
            };
            const result = buildPrismaQuery({
                query,
                searchableFields: ['name'],
                filterableFields: ['status']
            });

            expect(result.filters).toBeUndefined();
            expect(result.orderBy).toBeUndefined();
            expect(result.skip).toBe(0);
            expect(result.take).toBe(10);
        });
    });
});
