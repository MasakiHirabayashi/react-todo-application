export const CompleteArea = (props) => {
  const { completeList, setCompleteList, incompleteList, setIncompleteList } =
    props;

  /**
   * 戻すボタン押下時の処理
   * @param {対象のタスクのインデックス} index
   */
  const onClickReturn = (index) => {
    const newCompleteList = [...completeList];
    newCompleteList.splice(index, 1);

    const newIncompleteList = [...incompleteList, completeList[index]];

    setIncompleteList(newIncompleteList);
    setCompleteList(newCompleteList);
  };

  return (
    <div className="complete-area">
      <p className="title">完了のTodo</p>
      {completeList.map((todo, index) => {
        return (
          <div key={todo} className="list-row">
            <li> {todo} </li>
            <button onClick={() => onClickReturn(index)}>戻す</button>
          </div>
        );
      })}
    </div>
  );
};
