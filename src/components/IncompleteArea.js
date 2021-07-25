import React, { forwardRef } from "react";
import MaterialTable from "material-table";

import DoneIcon from '@material-ui/icons/Done';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export const IncompleteArea = (props) => {
  const { incompleteList, setIncompleteList, completeList, setCompleteList } =
    props;

  const tableIcons = {
    FirstPage: forwardRef((props, ref) => <FirstPageIcon {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPageIcon {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRightIcon {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeftIcon {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <ClearIcon {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <SearchIcon {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownwardIcon {...props} ref={ref} />),
  }

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

    // 現在日付取得
    const dateObj = new Date();
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const date = dateObj.getDate();
    const hour = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const nowDateTime = year + "/" + month + "/" + date + " " + hour + ":" + minutes;
    
    incompleteList[index]['CompleteDate'] = nowDateTime
    const newCompleteList = [...completeList, incompleteList[index]];
    setIncompleteList(newIncompleteList);
    setCompleteList(newCompleteList);
  };

  return (
    <MaterialTable
      title="未完了のTodo"
      columns={[
        { title: "タイトル", field: "Title" },
        { title: "登録日時", field: "RegisterdDate"}
      ]}
      data={[...incompleteList]}
      actions={[
        {
          icon: DoneIcon,
          tooltip: "完了",
          onClick: (event, rowData) =>  onClickComplete(rowData.tableData.id),
          iconProps: {color: 'primary'}
        },
        {
          icon: DeleteOutline,
          tooltip: "削除",
          onClick: (event, rowData) => onClickDelete(rowData.tableData.id),
          iconProps: {color: 'secondary'}
        }
      ]}
      icons={
        tableIcons
      }
      options={{
        padding: 'dense',
        search: false,
        paging: false
      }}
    />
  );
};
