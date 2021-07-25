import MaterialTable from "material-table";

import ReplayIcon from "@material-ui/icons/Replay";

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
    <MaterialTable
      title="完了済みのTodo"
      columns={[
        { title: "タイトル", field: "Title" },
        { title: "登録日時", field: "RegisterdDate"},
        { title: "完了日時", field: "CompleteDate" },
      ]}
      data={[...completeList]}
      actions={[
        {
          icon: ReplayIcon,
          tooltip: "戻す",
          onClick: (event, rowData) => onClickReturn(rowData.tableData.id),
          iconProps: ReplayIcon.color= "primary" ,
        },
      ]}
      options={{
        padding: "dense",
        search: false,
        paging: false,
      }}
    />
  );
};
