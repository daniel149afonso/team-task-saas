CREATE TABLE teams (
    id UUID PRIMARY KEY,
    name TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE tasks(
    id UUID PRIMARY KEY,
    team_id UUID NOT NULL REFERENCES teams(id) ON DELETE CASCADE,

    title TEXT NOT NULL,
    description TEXT NOT NULL,

    status TEXT NOT NULL CHECK(status IN ('todo', 'doing', 'done')),

    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);