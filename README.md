# Development

## Pasos para levantar la app en desaarrollo

1. Levantar la base de daatoss
```
docker compose up -d
```
2. env template a env y reeemplazar por reales
## Prisma 

1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started   
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.        
3. Run npx prisma db pull to turn your database schema into a Prisma schema.
4. Run npx prisma generate to generate the Prisma Client. You can then start querying your database.

```
npx prisma init
npx prisma migrate dev
npx prisma generate
```