import { Pool } from '@neondatabase/serverless';
import { Kysely, PostgresDialect } from 'kysely';
import { DB } from "@/kysely-types.ts";

export async function getProjects(type: string) {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const db = new Kysely<DB>({ dialect: new PostgresDialect({ pool }) });
    
    const response = await db
        .selectFrom('projects')
        .select(['id', 'title', 'project_link', 'project_language', 'description', 'demo', 'made_for', 'collaborators'])
        .where('type', '=', type)
        .execute()
    
    pool.end()

    return response;
}
