import React, { forwardRef } from "react";
import MaterialTable from "material-table";

import {
  FirstPage,
  LastPage,
  ChevronRight,
  ChevronLeft,
  Search,
  Clear,
  ArrowDownward,
  Replay
} from "@material-ui/icons"

export const CompleteArea = ({ completeList, setCompleteList, incompleteList, setIncompleteList }) => {

  const tableIcons = {
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  };

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
        { title: "登録日時", field: "RegisterdDate" },
        { title: "完了日時", field: "CompleteDate" },
      ]}
      data={[...completeList]}
      actions={[
        {
          icon: Replay,
          tooltip: "戻す",
          onClick: (event, rowData) => onClickReturn(rowData.tableData.id),
          iconProps: (Replay.color = "primary"),
        },
      ]}
      icons={
        tableIcons
      }
      options={{
        padding: "dense",
        search: false,
        paging: false,
      }}
    />
  );
};
