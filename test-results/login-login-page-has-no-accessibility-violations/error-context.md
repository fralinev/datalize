# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> login page has no accessibility violations
- Location: tests/login.spec.js:4:1

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -  1
+ Received  + 72

- Array []
+ Array [
+   Object {
+     "description": "Ensure the document has a main landmark",
+     "help": "Document should have one main landmark",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright",
+     "id": "landmark-one-main",
+     "impact": "moderate",
+     "nodes": Array [
+       Object {
+         "all": Array [
+           Object {
+             "data": null,
+             "id": "page-has-main",
+             "impact": "moderate",
+             "message": "Document does not have a main landmark",
+             "relatedNodes": Array [],
+           },
+         ],
+         "any": Array [],
+         "failureSummary": "Fix all of the following:
+   Document does not have a main landmark",
+         "html": "<html lang=\"en\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "html",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.semantics",
+       "best-practice",
+     ],
+   },
+   Object {
+     "description": "Ensure all page content is contained by landmarks",
+     "help": "All page content should be contained by landmarks",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/region?application=playwright",
+     "id": "region",
+     "impact": "moderate",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"mb-8 text-center\"><div class=\"inline-block bg-blue-600 text-white rounded px-3 py-1 text-sm font-semibold tracking-wide mb-3\">Orbital Health</div><h1 class=\"text-xl font-bold text-gray-900\">Sign in to your account</h1></div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".mb-8",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.keyboard",
+       "best-practice",
+       "RGAAv4",
+       "RGAA-9.2.1",
+     ],
+   },
+ ]
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e5]:
    - generic [ref=e6]: Orbital Health
    - heading "Sign in to your account" [level=1] [ref=e7]
  - form "Sign in" [ref=e8]:
    - generic [ref=e9]:
      - generic [ref=e10]: Username
      - textbox "Username" [ref=e11]:
        - /placeholder: you@example.com
    - generic [ref=e12]:
      - generic [ref=e13]: Password
      - textbox "Password" [ref=e14]:
        - /placeholder: ••••••••
    - button "Sign in" [ref=e15]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | import AxeBuilder from '@axe-core/playwright'
  3  | 
  4  | test('login page has no accessibility violations', async ({ page }) => {
  5  |   await page.goto('/')
  6  |   const results = await new AxeBuilder({ page }).analyze()
> 7  |   expect(results.violations).toEqual([])
     |                              ^ Error: expect(received).toEqual(expected) // deep equality
  8  | })
  9  | 
  10 | test('user can log in and reach the dashboard', async ({ page }) => {
  11 |   await page.goto('/')
  12 | 
  13 |   await page.fill('#username', 'testuser')
  14 |   await page.fill('#password', 'password123')
  15 |   await page.click('button[type="submit"]')
  16 | 
  17 |   await expect(page.locator('text=Total Filings')).toBeVisible()
  18 | })
  19 | 
```