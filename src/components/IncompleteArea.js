export const IncompleteArea = (props) => {

    const {incompleteList, setIncompleteList, completeList, setCompleteList } = props;

  /**
   * 削除ボタン押下時の処理
   * @param {対象のタスクのインデックス} index
   */
  const onClickDelete = (index) => {
    const newIncompleteList = [...incompleteList];
    newIncompleteList.splice(index, 1);
    setIncompleteList(newIncompleteList);
  };

  /**
   * 完了ボタン押下時の処理
   * @param {対象のタスクのインデックス} index
   */
  const onClickComplete = (index) => {
    const newIncompleteList = [...incompleteList];
    newIncompleteList.splice(index, 1);

    const newCompleteList = [...completeList, incompleteList[index]];
    setIncompleteList(newIncompleteList);
    setCompleteList(newCompleteList);
  };

  return (
    <div className="incomplete-area">
      <p className="title">未完了のTodo</p>
      <ul>
        {incompleteList.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
