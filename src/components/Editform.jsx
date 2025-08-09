import { useState } from 'react';
import { FaRegPenToSquare } from 'react-icons/fa6';
import { RiDeleteBin5Line } from 'react-icons/ri';

function Item({ item, onDeleteItem, onToggleItem, onEditItem }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(item.description);

  // 切換編輯模式
  function toggleEditMode() {
    setIsEditing(!isEditing);
  }

  // 處理修改後的文字
  function handleEditChange(e) {
    setNewDescription(e.target.value);
  }

  // 提交修改
  function handleEditSubmit(e) {
    e.preventDefault();
    if (newDescription.trim()) {
      onEditItem(item.id, newDescription);
      // 關閉編輯模式
      toggleEditMode();
    }
  }

  return (
    <li>
      <input
        className="check-box"
        // 讓 checkbox 的值和 item.state 綁定
        value={item.state}
        type="checkbox"
        onChange={() => onToggleItem(item.id)}
      />

      {/* 顯示待辦內容或編輯狀態 */}
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            className="Update"
            type="text"
            value={newDescription}
            onChange={handleEditChange}
            autoFocus
          />
        </form>
      ) : (
        <span
          className="text"
          // 判斷 若完成就劃掉
          style={item.state ? { textDecoration: 'line-through' } : {}}
        >
          {item.description}
        </span>
      )}
      <span className="edit-icon" onClick={toggleEditMode}>
        <FaRegPenToSquare />
      </span>
      <span className="delete-icon" onClick={() => onDeleteItem(item.id)}>
        <RiDeleteBin5Line />
      </span>
    </li>
  );
}

export default Item;
