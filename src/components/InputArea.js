export const InputArea = (props) => {
  const { inputText, setInputText, incompleteList, setIncompleteList } = props;

  /**
   * フォーム入力時の処理
   * @param {event} e
   */
  const onChangeInputText = (e) => {
    setInputText(e.target.value);
  };

  /**
   * 登録ボタン押下時の処理
   * @returns 空文字の際は登録を受け付けない
   */
  const onClickAdd = () => {
    if (inputText === "") return;
    setIncompleteList([...incompleteList, inputText]);
    setInputText("");
  };

  return (
    <div className="input-area">
      <input
        placeholder="input text here"
        value={inputText}
        onChange={onChangeInputText}
      />
      <button onClick={onClickAdd}>登録</button>
    </div>
  );
};
