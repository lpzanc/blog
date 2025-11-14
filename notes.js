/* ===== 现代卡片风（零美工） ===== */
:root{
  --bg:#f5f7fa;
  --card:#ffffff;
  --primary:#0366d6;
  --danger:#d73a49;
  --text:#24292e;
  --border:#e1e4e8;
  --radius:8px;
  --shadow:0 2px 6px rgba(0,0,0,.05);
}

body{
  margin:0;
  padding:40px;
  background:var(--bg);
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif;
  color:var(--text);
  line-height:1.6;
}

h1{margin-top:0;font-size:28px;font-weight:600}

/* 顶部操作区 */
.top-bar{
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:25px;
}

.back-btn{
  text-decoration:none;
  color:var(--primary);
  font-size:14px;
}

.new-btn{
  padding:8px 16px;
  background:var(--primary);
  color:#fff;
  border:none;
  border-radius:var(--radius);
  cursor:pointer;
  font-size:14px;
  transition:background .2s;
}
.new-btn:hover{background:#0256cc}

/* 编辑器卡片 */
#editor{
  background:var(--card);
  padding:20px;
  border-radius:var(--radius);
  box-shadow:var(--shadow);
  margin-bottom:25px;
}
#editor input,#editor textarea{
  width:100%;
  padding:10px;
  border:1px solid var(--border);
  border-radius:var(--radius);
  font-size:15px;
  resize:vertical;
}
#editor textarea{min-height:180px;margin-top:8px}
#editor .actions{
  margin-top:15px;
  display:flex;
  gap:10px;
}
#editor button{
  padding:8px 16px;
  border:none;
  border-radius:var(--radius);
  cursor:pointer;
  font-size:14px;
  transition:background .2s;
}
#editor button:first-child{background:var(--primary);color:#fff}
#editor button:first-child:hover{background:#0256cc}
#editor button:last-child{background:var(--border);color:var(--text)}
#editor button:last-child:hover{background:#d0d7de}

/* 随笔卡片 */
#list > details{
  background:var(--card);
  padding:18px;
  border-radius:var(--radius);
  box-shadow:var(--shadow);
  margin-bottom:12px;
}
#list > details summary{
  cursor:pointer;
  font-weight:600;
  display:flex;
  justify-content:space-between;
  align-items:center;
}
#list > details small{color:#586069;font-size:13px}
#list > details .content{
  margin-top:10px;
  white-space:pre-wrap;
  font-size:15px;
  line-height:1.7;
}
#list > details button{
  background:var(--danger);
  color:#fff;
  border:none;
  padding:4px 8px;
  border-radius:4px;
  font-size:12px;
  cursor:pointer;
}
#list > details button:hover{background:#b31d28}

/* 空状态 */
#list:empty::after{
  content:"暂无随笔，点上方“写新随笔”开始～";
  display:block;
  text-align:center;
  color:#586069;
  margin:40px 0;
}
