import { Button } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

export const InputArea = ({ inputText, setInputText, incompleteList, setIncompleteList }) => {

  /**
   * フォーム入力時の処理
   * @param {event} e
   */
  const onChangeInputText = (e) => {
    setInputText(e.target.value);
  };

  // 現在日付取得
  const dateObj = new Date();
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const date = dateObj.getDate();
  const hour = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const nowDateTime = year + '/' + month + '/' + date + ' ' + hour + ':' +  minutes

  /**
   * 登録ボタン押下時の処理
   * @returns 空文字の際は登録を受け付けない
   */
  const onClickAdd = () => {
    setIncompleteList([...incompleteList, {'Title': inputText, 'RegisterdDate' : nowDateTime, 'CompleteDate' : ''}]);
    setInputText("");
  };

  return (
    <div className="input-area">
      <input
        placeholder="input text here"
        value={inputText}
        onChange={onChangeInputText}
      />
        <Button
        onClick={() => {onClickAdd()}}
        color='primary'
        disabled={inputText === ""}
        startIcon={<AddCircleIcon />}
        />
    </div>
  );
};
