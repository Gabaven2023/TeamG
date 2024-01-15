document.getElementById('add-task').addEventListener('click', function () {

   // 入力フィールドから新しいタスクのテキストを取得
  const taskText = document.getElementById('task-text').value;
  if (taskText) {
  
    // タスクを表示するul要素を取得
    const taskList = document.getElementById('task-list');
    
    // 新しいタスクを表示するli要素を作成
    const taskItem = document.createElement('li');
    
    taskItem.textContent = taskText;
    taskList.appendChild(taskItem);
    // 新しいタスクを追加した後、入力フィールドをクリア
    document.getElementById('task-text').value = '';
  }
});

// ページ読み込み時にローカルストレージからタスクを取得
window.onload = function () {
  // ローカルストレージから保存されたタスクを取得
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // タスクを表示するul要素を取得
  const taskList = document.getElementById("task-list");

  // 保存されたタスクをリストに追加
  savedTasks.forEach(function (taskText) {
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;
    taskList.appendChild(taskItem);
  });
};

// "追加"ボタンがクリックされたときの処理
document.getElementById("add-task").addEventListener("click", function () {
  // 入力フィールドから新しいタスクのテキストを取得
  const taskText = document.getElementById("task-text").value;
  if (taskText) {
    // タスクを表示するul要素を取得
    const taskList = document.getElementById("task-list");

    // 新しいタスクを表示するli要素を作成
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // リストに新しいタスクを追加
    taskList.appendChild(taskItem);

    // ローカルストレージから保存されたタスクを取得
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // 新しいタスクを保存されたタスクの配列に追加
    savedTasks.push(taskText);

    // ローカルストレージに保存
    localStorage.setItem("tasks", JSON.stringify(savedTasks));

    // 新しいタスクを追加した後、入力フィールドをクリア
    document.getElementById("task-text").value = "";
  }
});