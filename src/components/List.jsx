import Editform from './Editform';

function List({ items, onDeleteItem, onToggleItem, onEditItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Editform
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            onEditItem={onEditItem}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default List;
