import { useState } from 'react';

function CreateForm({ onAddItems }) {
  // 1. Hook 設定 input 初始狀態

  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target[0].value);

    // 若未輸入內容則不執行
    if (!description) return;

    // 4. 建立物件將 input 的值放進 newItem
    const newItem = { description, state: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    // 5. 恢復 input 初始狀態
    setDescription('');
  }

  return (
    <form className="add-enter" onSubmit={handleSubmit}>
      <input
        className="enter"
        type="text"
        placeholder="  Add a new tasks...📝"
        // 2. 雙向綁定
        value={description}
        // 3. Hook 抓取 input 的值顯示於畫面
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="add-button">+</button>
    </form>
  );
}

export default CreateForm;
