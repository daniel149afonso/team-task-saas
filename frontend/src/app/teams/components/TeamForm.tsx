import { useState } from 'react';
import type { FormEvent } from 'react';

export function TeamForm({ onCreate }: { onCreate: (name: string) => void }) {
  const [name, setName] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    onCreate(name.trim());
    setName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label>Team name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Frontend, Backend, Design…"
          />
        </div>
        <button className="btn btn-primary" type="submit" style={{ alignSelf: 'flex-end' }}>
          Create team
        </button>
      </div>
    </form>
  );
}
