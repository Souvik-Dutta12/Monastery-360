# Internationalization (i18n) Implementation Guide

This guide explains how to implement translations across the entire website using the i18next library that has been set up.

## Current Status

- ✅ i18next and related packages are installed
- ✅ Configuration is set up in `src/i18n.js`
- ✅ Translation files are created for English and Hindi
- ✅ Navigation bar is fully internationalized
- ✅ Language switcher is functional

## How to Implement Translations in Components

### Step 1: Import the useTranslation hook

```jsx
import { useTranslation } from 'react-i18next';
```

### Step 2: Initialize the hook in your component

```jsx
const { t, i18n } = useTranslation();
```

### Step 3: Replace static text with translation keys

```jsx
// Before
<h1>Welcome to Monastery 360</h1>

// After
<h1>{t('welcome')}</h1>
```

## Example Implementation

```jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('hero_title')}</h1>
      <p>{t('hero_subtitle')}</p>
      <button>{t('get_started')}</button>
    </div>
  );
};

export default MyComponent;
```

## Translation Keys

All translation keys are organized by section in the translation files:

- `public/locales/en/translation.json` (English)
- `public/locales/hi/translation.json` (Hindi)

## Adding New Translations

1. Add new keys to both language files
2. Use consistent naming conventions (lowercase with underscores)
3. Group related translations together

## Dynamic Content with Variables

```jsx
// In your component
<p>{t('greeting', { name: userName })}</p>

// In translation file
{
  "greeting": "Hello, {{name}}!"
}
```

## Pluralization

```jsx
// In your component
<p>{t('items', { count: itemCount })}</p>

// In translation file
{
  "items": "{{count}} item",
  "items_plural": "{{count}} items"
}
```

## Testing Translations

1. Switch languages using the language selector
2. Verify that all text changes appropriately
3. Check for any missing translations or formatting issues

## Best Practices

1. Always use translation keys instead of hardcoded text
2. Keep translation files organized and consistent
3. Use descriptive key names that reflect the content
4. Test thoroughly in all supported languages