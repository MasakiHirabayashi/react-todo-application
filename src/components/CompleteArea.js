import React, { forwardRef } from "react";
import MaterialTable from "material-table";

import FirstPageIcon from "@material-ui/icons/FirstPage";
import LastPageIcon from "@material-ui/icons/LastPage";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ReplayIcon from "@material-ui/icons/Replay";

export const CompleteArea = (props) => {
  const { completeList, setCompleteList, incompleteList, setIncompleteList } =
    props;

  const tableIcons = {
    FirstPage: forwardRef((props, ref) => <FirstPageIcon {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPageIcon {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRightIcon {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeftIcon {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <ClearIcon {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <SearchIcon {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownwardIcon {...props} ref={ref} />),
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
          icon: ReplayIcon,
          tooltip: "戻す",
          onClick: (event, rowData) => onClickReturn(rowData.tableData.id),
          iconProps: (ReplayIcon.color = "primary"),
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
