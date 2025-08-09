import { useEffect, useState } from 'react';
import CreateForm from './CreateForm';
import List from './List';

function TodoWrapper() {
  // 提升 state 到最上層
  const [items, setItems] = useState([]);

  // 讀取 localStorage 中的資料並設定初始值
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  // 更新 localStorage 中的資料
  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem('items', JSON.stringify(items));
    }
  }, [items]);

  // 處理新增項目
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  // 處理刪除項目
  function handleDeleteItem(id) {
    // 1. 從 items 中移除指定的項目
    const updatedItems = items.filter((item) => item.id !== id);

    // 2. 更新狀態（React state）
    setItems(updatedItems);

    // 3. 同步更新 localStorage
    localStorage.setItem('items', JSON.stringify(updatedItems));
  }

  // 處理切換項目狀態
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, state: !item.state } : item
      )
    );
  }

  // 處理編輯項目
  function handleEditItem(id, newDescription) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, description: newDescription } : item
      )
    );
  }

  return (
    <div className="app">
      <div className="title">Todolist</div>
      {/* <Logo /> */}
      <CreateForm onAddItems={handleAddItem} />
      <List
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onEditItem={handleEditItem}
      />
    </div>
  );
}

export default TodoWrapper;
