---
sidebar_position: 5
---

# Mock Data

This page provides information about the available mock data that you can use for testing and development purposes.

## Overview

We provide several JSON files containing mock data for common entities in our system. These files are available in the `/data` directory of our documentation site and can be accessed directly via HTTP.

## Available Mock Data

| Data Type | Description | Endpoint |
|-----------|-------------|----------|
| Users | Sample user accounts with profiles | `/data/users.json` |
| Products | Product catalog with details | `/data/products.json` |
| Orders | Sample orders with line items | `/data/orders.json` |
| Analytics | Sample analytics and reporting data | `/data/analytics.json` |

## How to Use

You can use these mock data files in several ways:

### Direct HTTP Access

You can fetch the mock data directly from our documentation site:

```javascript
async function fetchUsers() {
  const response = await fetch('/data/users.json');
  const data = await response.json();
  return data.users;
}
```

### Local Development

For local development, you can download the files and use them in your project:

```bash
# Using curl
curl -O https://your-site.com/data/users.json
curl -O https://your-site.com/data/products.json
curl -O https://your-site.com/data/orders.json
curl -O https://your-site.com/data/analytics.json
```

## Data Structure Examples

### User Object

```json
{
  "id": "user-001",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "role": "admin",
  "status": "active",
  "created_at": "2024-01-15T08:30:00Z",
  "profile": {
    "avatar_url": "https://example.com/avatars/john.jpg",
    "bio": "Software engineer with 10 years of experience",
    "location": "San Francisco, CA"
  }
}
```

### Product Object

```json
{
  "id": "prod-001",
  "name": "Premium Widget",
  "description": "High-quality widget with advanced features",
  "price": 49.99,
  "category": "widgets",
  "status": "in_stock",
  "inventory": {
    "quantity": 150,
    "warehouse": "east",
    "reorder_level": 25
  },
  "specifications": {
    "dimensions": "10 x 5 x 3 cm",
    "weight": "250g",
    "color": "silver",
    "material": "aluminum"
  }
}
```

### Order Object

```json
{
  "id": "order-001",
  "user_id": "user-002",
  "status": "completed",
  "items": [
    {
      "product_id": "prod-001",
      "name": "Premium Widget",
      "quantity": 2,
      "price": 49.99,
      "subtotal": 99.98
    }
  ],
  "shipping": {
    "address": {
      "street": "123 Main St",
      "city": "New York",
      "state": "NY",
      "zip": "10001",
      "country": "USA"
    },
    "method": "express",
    "cost": 15.00
  },
  "subtotal": 99.98,
  "tax": 8.00,
  "total": 122.98
}
```

## Notes on Mock Data

- All data is fictional and does not represent real users, products, or transactions
- Timestamps use ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ)
- Currency values are in USD
- IDs follow a consistent pattern for each entity type
