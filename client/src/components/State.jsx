import React, { useState, useReducer, useContext, createContext, useEffect } from 'react';
import { create } from 'zustand';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

// ==================== useState (Beginner) ====================
function UseStateExample() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: 'John', age: 30 });

  return (
    <div style={{ padding: '1rem', border: '2px solid #4CAF50', borderRadius: '8px', marginBottom: '2rem' }}>
      <h2>useState Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ margin: '0.5rem' }}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)} style={{ margin: '0.5rem' }}>
        Decrement
      </button>
      
      <p>User: {user.name}, Age: {user.age}</p>
      <button 
        onClick={() => setUser({...user, age: user.age + 1})}
        style={{ margin: '0.5rem' }}
      >
        Increase Age
      </button>
      <button 
        onClick={() => setUser({...user, name: user.name === 'John' ? 'Jane' : 'John'})}
        style={{ margin: '0.5rem' }}
      >
        Change Name
      </button>
    </div>
  );
}

// ==================== useReducer + Context (Intermediate) ====================
const AppContext = createContext();

const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_ITEM':
      return { 
        ...state, 
        items: state.items.filter(item => item.id !== action.payload) 
      };
    case 'INCREMENT_COUNT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT_COUNT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, {
    user: { name: 'John', age: 30 },
    items: [],
    count: 0
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

const useAppState = () => useContext(AppContext);

function UseReducerExample() {
  const { state, dispatch } = useAppState();
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim()) {
      dispatch({
        type: 'ADD_ITEM',
        payload: { id: Date.now(), text: newItem }
      });
      setNewItem('');
    }
  };

  return (
    <div style={{ padding: '1rem', border: '2px solid #2196F3', borderRadius: '8px', marginBottom: '2rem' }}>
      <h2>useReducer + Context Example</h2>
      <p>Count: {state.count}</p>
      <button 
        onClick={() => dispatch({ type: 'INCREMENT_COUNT' })}
        style={{ margin: '0.5rem' }}
      >
        Increment
      </button>
      <button 
        onClick={() => dispatch({ type: 'DECREMENT_COUNT' })}
        style={{ margin: '0.5rem' }}
      >
        Decrement
      </button>
      
      <p>User: {state.user.name}, Age: {state.user.age}</p>
      <button 
        onClick={() => dispatch({
          type: 'SET_USER',
          payload: { ...state.user, age: state.user.age + 1 }
        })}
        style={{ margin: '0.5rem' }}
      >
        Increase Age
      </button>
      
      <div>
        <h3>Items:</h3>
        <ul>
          {state.items.map(item => (
            <li key={item.id}>
              {item.text}
              <button 
                onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                style={{ marginLeft: '0.5rem' }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
          style={{ marginRight: '0.5rem' }}
        />
        <button onClick={addItem}>Add Item</button>
      </div>
    </div>
  );
}

// ==================== Zustand (Advanced) ====================
const useZustandStore = create((set, get) => ({
  user: { name: 'John', age: 30 },
  items: [],
  count: 0,
  
  setUser: (user) => set({ user }),
  
  addItem: (item) => set((state) => ({
    items: [...state.items, item]
  })),
  
  removeItem: (itemId) => set((state) => ({
    items: state.items.filter(item => item.id !== itemId)
  })),
  
  incrementCount: () => set((state) => ({ count: state.count + 1 })),
  decrementCount: () => set((state) => ({ count: state.count - 1 })),
  
  // Getter (computed value)
  getItemsCount: () => {
    const { items } = get();
    return items.length;
  }
}));

function ZustandExample() {
  const {
    user,
    items,
    count,
    setUser,
    addItem,
    removeItem,
    incrementCount,
    decrementCount,
    getItemsCount
  } = useZustandStore();
  
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim()) {
      addItem({ id: Date.now(), text: newItem });
      setNewItem('');
    }
  };

  return (
    <div style={{ padding: '1rem', border: '2px solid #FF9800', borderRadius: '8px', marginBottom: '2rem' }}>
      <h2>Zustand Example</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCount} style={{ margin: '0.5rem' }}>
        Increment
      </button>
      <button onClick={decrementCount} style={{ margin: '0.5rem' }}>
        Decrement
      </button>
      
      <p>User: {user.name}, Age: {user.age}</p>
      <button 
        onClick={() => setUser({ ...user, age: user.age + 1 })}
        style={{ margin: '0.5rem' }}
      >
        Increase Age
      </button>
      <button 
        onClick={() => setUser({ 
          ...user, 
          name: user.name === 'John' ? 'Jane' : 'John' 
        })}
        style={{ margin: '0.5rem' }}
      >
        Change Name
      </button>
      
      <div>
        <h3>Items ({getItemsCount()}):</h3>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.text}
              <button 
                onClick={() => removeItem(item.id)}
                style={{ marginLeft: '0.5rem' }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
          style={{ marginRight: '0.5rem' }}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
  );
}

// ==================== Redux Toolkit (Enterprise) ====================
const userSlice = createSlice({
  name: 'user',
  initialState: { name: 'John', age: 30 },
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    increaseAge: (state) => {
      state.age += 1;
    }
  }
});

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    }
  }
});

const countSlice = createSlice({
  name: 'count',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1
  }
});

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    items: itemsSlice.reducer,
    count: countSlice.reducer
  }
});

const { setUser, increaseAge } = userSlice.actions;
const { addItem, removeItem } = itemsSlice.actions;
const { increment, decrement } = countSlice.actions;

function ReduxToolkitExample() {
  const user = useSelector(state => state.user);
  const items = useSelector(state => state.items);
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim()) {
      dispatch(addItem({ id: Date.now(), text: newItem }));
      setNewItem('');
    }
  };

  return (
    <div style={{ padding: '1rem', border: '2px solid #9C27B0', borderRadius: '8px', marginBottom: '2rem' }}>
      <h2>Redux Toolkit Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())} style={{ margin: '0.5rem' }}>
        Increment
      </button>
      <button onClick={() => dispatch(decrement())} style={{ margin: '0.5rem' }}>
        Decrement
      </button>
      
      <p>User: {user.name}, Age: {user.age}</p>
      <button 
        onClick={() => dispatch(increaseAge())}
        style={{ margin: '0.5rem' }}
      >
        Increase Age
      </button>
      <button 
        onClick={() => dispatch(setUser({ 
          ...user, 
          name: user.name === 'John' ? 'Jane' : 'John' 
        }))}
        style={{ margin: '0.5rem' }}
      >
        Change Name
      </button>
      
      <div>
        <h3>Items ({items.length}):</h3>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.text}
              <button 
                onClick={() => dispatch(removeItem(item.id))}
                style={{ marginLeft: '0.5rem' }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
          style={{ marginRight: '0.5rem' }}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
  );
}

// ==================== Main App Component ====================
function StateManagementDemo() {
  const [currentView, setCurrentView] = useState('useState');

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>State Management Comparison</h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <button 
          onClick={() => setCurrentView('useState')}
          style={{ 
            margin: '0.5rem', 
            backgroundColor: currentView === 'useState' ? '#4CAF50' : '#ddd',
            color: currentView === 'useState' ? 'white' : 'black'
          }}
        >
          useState
        </button>
        <button 
          onClick={() => setCurrentView('useReducer')}
          style={{ 
            margin: '0.5rem', 
            backgroundColor: currentView === 'useReducer' ? '#2196F3' : '#ddd',
            color: currentView === 'useReducer' ? 'white' : 'black'
          }}
        >
          useReducer
        </button>
        <button 
          onClick={() => setCurrentView('zustand')}
          style={{ 
            margin: '0.5rem', 
            backgroundColor: currentView === 'zustand' ? '#FF9800' : '#ddd',
            color: currentView === 'zustand' ? 'white' : 'black'
          }}
        >
          Zustand
        </button>
        <button 
          onClick={() => setCurrentView('redux')}
          style={{ 
            margin: '0.5rem', 
            backgroundColor: currentView === 'redux' ? '#9C27B0' : '#ddd',
            color: currentView === 'redux' ? 'white' : 'black'
          }}
        >
          Redux Toolkit
        </button>
      </div>
      
      {currentView === 'useState' && <UseStateExample />}
      {currentView === 'useReducer' && (
        <AppProvider>
          <UseReducerExample />
        </AppProvider>
      )}
      {currentView === 'zustand' && <ZustandExample />}
      {currentView === 'redux' && (
        <Provider store={store}>
          <ReduxToolkitExample />
        </Provider>
      )}
      
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <h3>When to use each approach:</h3>
        <ul>
          <li><strong>useState</strong>: Component-level state, simple values</li>
          <li><strong>useReducer + Context</strong>: Medium complexity, avoids prop drilling</li>
          <li><strong>Zustand</strong>: Lightweight global state, simpler than Redux</li>
          <li><strong>Redux Toolkit</strong>: Complex apps, enterprise needs, devtools</li>
        </ul>
      </div>
    </div>
  );
}

export default StateManagementDemo;