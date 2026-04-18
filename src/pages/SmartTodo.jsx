import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import {
  Plus, Trash2, CheckCircle2, Circle, Search, Filter,
  Calendar, Flag, Tag, DownloadCloud, UploadCloud,
  ArrowLeft, GripVertical, Edit3, X, Check
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

const CATEGORIES = ['All', 'Work', 'Personal', 'Shopping', 'Health'];
const PRIORITIES = ['High', 'Medium', 'Low'];
const PRIORITY_COLORS = { High: 'accent-pink', Medium: 'accent-purple', Low: 'accent-cyan' };

const defaultTasks = [
  { id: Date.now() + 1, text: 'Build portfolio project', category: 'Work', priority: 'High', due: '', done: false },
  { id: Date.now() + 2, text: 'Go for a morning run', category: 'Health', priority: 'Medium', due: '', done: false },
  { id: Date.now() + 3, text: 'Buy groceries', category: 'Shopping', priority: 'Low', due: '', done: true },
];

const SmartTodo = ({ theme, toggleTheme }) => {
  const [tasks, setTasks] = useState(() => {
    try { return JSON.parse(localStorage.getItem('smartTodoTasks')) || defaultTasks; }
    catch { return defaultTasks; }
  });
  const [filterCat, setFilterCat] = useState('All');
  const [filterPri, setFilterPri] = useState('All');
  const [search, setSearch] = useState('');
  const [showDone, setShowDone] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const [newTask, setNewTask] = useState({ text: '', category: 'Work', priority: 'Medium', due: '' });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    localStorage.setItem('smartTodoTasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.text.trim()) return;
    setTasks(prev => [{ id: Date.now(), ...newTask, done: false }, ...prev]);
    setNewTask({ text: '', category: 'Work', priority: 'Medium', due: '' });
    setShowForm(false);
  };

  const toggleDone = (id) => setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  const deleteTask = (id) => setTasks(prev => prev.filter(t => t.id !== id));

  const startEdit = (task) => { setEditingId(task.id); setEditText(task.text); };
  const saveEdit = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, text: editText } : t));
    setEditingId(null);
  };

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(tasks, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'tasks.json'; a.click();
  };

  const importJSON = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try { setTasks(JSON.parse(ev.target.result)); } catch { alert('Invalid JSON file'); }
    };
    reader.readAsText(file);
  };

  const filtered = tasks.filter(t => {
    if (filterCat !== 'All' && t.category !== filterCat) return false;
    if (filterPri !== 'All' && t.priority !== filterPri) return false;
    if (!showDone && t.done) return false;
    if (search && !t.text.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const total = tasks.length;
  const done = tasks.filter(t => t.done).length;
  const progress = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <PageWrapper theme={theme} toggleTheme={toggleTheme}>
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Link to="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors interactive text-sm font-bold">
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        {/* Header */}
        <div className="flex items-start justify-between mb-10 gap-4 flex-wrap">
          <div>
            <h1 className="text-4xl md:text-5xl font-black mb-2">
              Smart <span className="text-transparent bg-clip-text bg-neon-gradient">Todo</span>
            </h1>
            <p className="text-gray-400">Stay organized. Stay productive.</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <label className="flex items-center gap-2 px-4 py-2 glass border border-white/10 rounded-xl text-gray-400 hover:text-white text-xs font-bold cursor-pointer interactive transition-colors">
              <UploadCloud size={16} /> Import
              <input type="file" accept=".json" onChange={importJSON} className="hidden" />
            </label>
            <button onClick={exportJSON} className="flex items-center gap-2 px-4 py-2 glass border border-white/10 rounded-xl text-gray-400 hover:text-white text-xs font-bold interactive transition-colors">
              <DownloadCloud size={16} /> Export
            </button>
          </div>
        </div>

        {/* Progress */}
        <div className="glass rounded-2xl p-6 border border-white/10 mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-bold text-gray-400">Overall Progress</span>
            <span className="text-accent-cyan font-black">{done}/{total} tasks</span>
          </div>
          <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="h-full bg-neon-gradient rounded-full relative"
            >
              <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/30 blur-sm" />
            </motion.div>
          </div>
          <p className="text-xs text-gray-500 mt-2 font-medium">{progress}% complete</p>
        </div>

        {/* Add task button */}
        <motion.button
          onClick={() => setShowForm(!showForm)}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="w-full py-4 mb-6 bg-neon-gradient text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 interactive shadow-neon-purple"
        >
          <Plus size={20} /> Add New Task
        </motion.button>

        {/* Add form */}
        <AnimatePresence>
          {showForm && (
            <motion.form
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onSubmit={addTask}
              className="glass p-6 rounded-2xl border border-white/10 mb-6 space-y-4"
            >
              <input
                type="text"
                value={newTask.text}
                onChange={e => setNewTask(p => ({ ...p, text: e.target.value }))}
                placeholder="Task description..."
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan transition-all"
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <select
                  value={newTask.category}
                  onChange={e => setNewTask(p => ({ ...p, category: e.target.value }))}
                  className="bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-white focus:outline-none focus:border-accent-purple transition-all"
                >
                  {CATEGORIES.filter(c => c !== 'All').map(c => <option key={c} value={c} className="bg-gray-900">{c}</option>)}
                </select>
                <select
                  value={newTask.priority}
                  onChange={e => setNewTask(p => ({ ...p, priority: e.target.value }))}
                  className="bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-white focus:outline-none focus:border-accent-pink transition-all"
                >
                  {PRIORITIES.map(p => <option key={p} value={p} className="bg-gray-900">{p}</option>)}
                </select>
                <input
                  type="date"
                  value={newTask.due}
                  onChange={e => setNewTask(p => ({ ...p, due: e.target.value }))}
                  className="bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-white focus:outline-none focus:border-accent-cyan transition-all col-span-2 sm:col-span-1"
                />
              </div>
              <div className="flex gap-3">
                <button type="submit" className="flex-1 py-3 bg-accent-cyan text-black rounded-xl font-black text-sm interactive">Add Task</button>
                <button type="button" onClick={() => setShowForm(false)} className="px-6 py-3 glass border border-white/10 rounded-xl text-gray-400 hover:text-white text-sm font-bold interactive">Cancel</button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Filters */}
        <div className="glass p-4 rounded-2xl border border-white/10 mb-6 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search tasks..."
              className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan transition-all text-sm"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(c => (
              <button key={c} onClick={() => setFilterCat(c)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all interactive ${filterCat === c ? 'bg-accent-purple text-white' : 'glass text-gray-400 hover:text-white border border-white/10'}`}>
                {c}
              </button>
            ))}
            <div className="w-px h-auto bg-white/10 mx-1" />
            {['All', ...PRIORITIES].map(p => (
              <button key={p} onClick={() => setFilterPri(p)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all interactive ${filterPri === p ? 'bg-accent-pink text-white' : 'glass text-gray-400 hover:text-white border border-white/10'}`}>
                {p}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-2 cursor-pointer interactive w-fit">
            <input type="checkbox" checked={showDone} onChange={e => setShowDone(e.target.checked)} className="w-4 h-4 rounded accent-cyan" />
            <span className="text-sm text-gray-400 font-medium">Show completed</span>
          </label>
        </div>

        {/* Tasks list */}
        <Reorder.Group axis="y" values={filtered} onReorder={(newOrder) => {
          setTasks(prev => {
            const ids = newOrder.map(t => t.id);
            const rest = prev.filter(t => !ids.includes(t.id));
            return [...newOrder, ...rest];
          });
        }} className="space-y-3">
          <AnimatePresence>
            {filtered.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16 text-gray-500">
                <CheckCircle2 size={48} className="mx-auto mb-4 opacity-20" />
                <p className="font-bold">No tasks here!</p>
              </motion.div>
            )}
            {filtered.map((task) => {
              const prColor = PRIORITY_COLORS[task.priority] || 'accent-cyan';
              return (
                <Reorder.Item key={task.id} value={task} as="div">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className={`group flex items-start gap-3 p-4 glass rounded-2xl border border-white/10 hover:border-white/20 transition-all ${task.done ? 'opacity-50' : ''}`}
                  >
                    {/* Drag handle */}
                    <div className="text-gray-600 hover:text-gray-400 cursor-grab mt-1 shrink-0 interactive">
                      <GripVertical size={16} />
                    </div>

                    {/* Checkbox */}
                    <button onClick={() => toggleDone(task.id)} className="shrink-0 mt-0.5 interactive">
                      {task.done
                        ? <CheckCircle2 size={20} className="text-accent-cyan" />
                        : <Circle size={20} className="text-gray-500 hover:text-accent-cyan transition-colors" />}
                    </button>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {editingId === task.id ? (
                        <div className="flex gap-2">
                          <input
                            value={editText}
                            onChange={e => setEditText(e.target.value)}
                            className="flex-1 bg-white/5 border border-accent-cyan rounded-lg px-3 py-1 text-white text-sm focus:outline-none"
                            autoFocus
                            onKeyDown={e => { if (e.key === 'Enter') saveEdit(task.id); if (e.key === 'Escape') setEditingId(null); }}
                          />
                          <button onClick={() => saveEdit(task.id)} className="text-accent-cyan interactive"><Check size={16} /></button>
                          <button onClick={() => setEditingId(null)} className="text-gray-500 interactive"><X size={16} /></button>
                        </div>
                      ) : (
                        <p className={`text-sm font-medium ${task.done ? 'line-through text-gray-500' : 'text-white'}`}>{task.text}</p>
                      )}
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span className={`text-[10px] font-black uppercase tracking-widest text-${prColor} bg-${prColor}/10 border border-${prColor}/30 px-2 py-0.5 rounded-lg`}>
                          {task.priority}
                        </span>
                        <span className="text-[10px] font-bold text-gray-500 bg-white/5 border border-white/10 px-2 py-0.5 rounded-lg flex items-center gap-1">
                          <Tag size={10} /> {task.category}
                        </span>
                        {task.due && (
                          <span className="text-[10px] font-bold text-gray-500 flex items-center gap-1">
                            <Calendar size={10} /> {task.due}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => startEdit(task)} className="p-1.5 text-gray-500 hover:text-accent-cyan interactive transition-colors">
                        <Edit3 size={14} />
                      </button>
                      <button onClick={() => deleteTask(task.id)} className="p-1.5 text-gray-500 hover:text-accent-pink interactive transition-colors">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </motion.div>
                </Reorder.Item>
              );
            })}
          </AnimatePresence>
        </Reorder.Group>
      </div>
    </PageWrapper>
  );
};

export default SmartTodo;
