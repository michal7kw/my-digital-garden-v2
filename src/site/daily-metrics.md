---
title: "Log Daily Metrics"
layout: "layouts/note.njk"
---

<div class="input-form-container">
  <h2>Add Daily Metrics</h2>
  <form id="note-input-form">
    <div class="form-group">
      <label for="note-title">Date:</label>
      <input type="date" id="note-title" name="title" required>
    </div>
    
    <div class="form-group">
      <label for="note-folder">Folder:</label>
      <input type="text" id="note-folder" name="folder" value="daily-metrics" readonly>
    </div>
    
    <div class="form-group">
      <label for="note-content">Metrics (e.g., Calorie Intake, Sleep Hours):</label>
      <textarea id="note-content" name="content" rows="10" required></textarea>
    </div>
    
    <div class="form-group">
      <label for="note-tags">Tags (comma-separated):</label>
      <input type="text" id="note-tags" name="tags" placeholder="daily, metrics">
    </div>
    
    <button type="submit">Create Note</button>
    <div id="form-message"></div>
  </form>
</div>

<style>
.input-form-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: var(--background-secondary);
  border-radius: 10px;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-accent);
  font-weight: 600;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  background-color: var(--background-primary);
  color: var(--text-normal);
  border: 1px solid var(--text-muted);
  border-radius: 5px;
  font-family: var(--font-default);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--text-accent);
}

button[type="submit"] {
  background-color: var(--text-accent);
  color: var(--background-primary);
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
}

button[type="submit"]:hover {
  opacity: 0.9;
}

#form-message {
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: 5px;
  display: none;
}

#form-message.success {
  background-color: rgba(0, 200, 83, 0.2);
  color: rgb(0, 200, 83);
  display: block;
}

#form-message.error {
  background-color: rgba(255, 82, 82, 0.2);
  color: rgb(255, 82, 82);
  display: block;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', (event) => {
    // Set the default value of the date input to today's date
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('note-title').value = today;
});

document.getElementById('note-input-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  const messageDiv = document.getElementById('form-message');
  
  // Add frontmatter
  const tags = data.tags ? data.tags.split(',').map(t => t.trim()) : [];
  const fullContent = `---
title: ${data.title}
date: ${new Date().toISOString()}
tags: [${tags.join(', ')}]
---

${data.content}`;
  
  try {
    const response = await fetch('/api/submit-note', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: data.title,
        content: fullContent,
        folder: data.folder || ''
      })
    });
    
    if (response.ok) {
      messageDiv.textContent = 'Note created successfully! It will appear after the next sync.';
      messageDiv.className = 'success';
      e.target.reset();
      document.getElementById('note-title').value = new Date().toISOString().split('T')[0];
    } else {
      throw new Error('Failed to create note');
    }
  } catch (error) {
    messageDiv.textContent = 'Error creating note. Please try again.';
    messageDiv.className = 'error';
  }
});
</script>