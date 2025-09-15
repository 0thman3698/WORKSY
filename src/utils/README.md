# Unit Tests for Utility Functions

هذا المجلد يحتوي على unit tests للـ utility functions في المشروع.

## الملفات المختبرة

### 1. `apiError.test.ts`

- اختبارات لـ `ApiError` class
- اختبارات للـ static methods (badRequest, unauthorized, forbidden, etc.)
- اختبارات للـ error inheritance

### 2. `jwt.test.ts`

- اختبارات لـ JWT utility functions
- اختبارات لـ `generateAccessToken`, `generateRefreshToken`, `verifyToken`, `generateToken`
- اختبارات للـ token validation و error handling
- اختبارات للـ environment variables

### 3. `extractMention.test.ts`

- اختبارات لـ `extractMentions` function
- اختبارات لـ username patterns المختلفة
- اختبارات للـ edge cases
- اختبارات للـ performance

### 4. `fillter.test.ts`

- اختبارات لـ `buildPrismaQuery` function
- اختبارات للـ search functionality
- اختبارات للـ filtering functionality
- اختبارات للـ sorting و pagination

## كيفية تشغيل الـ Tests

### تشغيل جميع الـ Tests

```bash
npm test
```

### تشغيل Unit Tests فقط

```bash
npm run test:unit
```

### تشغيل Tests مع Coverage

```bash
npm run test:coverage
```

### تشغيل Tests للـ CI/CD

```bash
npm run test:ci
```

## Coverage Report

بعد تشغيل `npm run test:coverage`، ستجد تقرير الـ coverage في:

- `coverage/lcov-report/index.html` - تقرير HTML
- `coverage/lcov.info` - تقرير LCOV

## إضافة Tests جديدة

عند إضافة utility function جديدة:

1. أنشئ ملف `functionName.test.ts` في نفس مجلد الـ function
2. اتبع نفس نمط الـ tests الموجودة
3. تأكد من تغطية جميع الـ edge cases
4. أضف اختبارات للـ error handling

## Best Practices

- استخدم descriptive test names
- اتبع AAA pattern (Arrange, Act, Assert)
- اختبر الـ happy path و error cases
- استخدم mocks للـ external dependencies
- تأكد من أن الـ tests مستقلة (لا تعتمد على بعضها)
