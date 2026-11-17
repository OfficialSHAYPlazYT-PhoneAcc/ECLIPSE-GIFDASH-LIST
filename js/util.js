@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap');

:root {
  --blue: #0862f5;
  --bg: #ffffff;
  --panel: #ffffff;
  --text: #101114;
  --muted: #6c7280;
  --line: #e5e7eb;
  --soft: #f3f5f8;
  --shadow: 0 3px 12px rgba(0,0,0,.10);
}

* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--text); font-family: "Nunito Sans", Arial, sans-serif; font-weight: 700; }
body.dark { --bg:#111318; --panel:#191d25; --text:#f5f6fa; --muted:#a5adbb; --line:#303642; --soft:#232936; }
button, input, select { font: inherit; }
button { cursor: pointer; }

.topbar { height: 76px; background: var(--blue); color: white; display:flex; align-items:center; padding:0 max(24px, calc((100vw - 1440px)/2)); gap:42px; position:sticky; top:0; z-index:5; }
.brand { color:white; text-decoration:none; font-size:34px; font-weight:1000; letter-spacing:-1.5px; white-space:nowrap; }
.brand small { font-size:17px; letter-spacing:0; margin-left:8px; }
.nav { display:flex; align-self:stretch; gap:22px; }
.nav-link { border:0; color:white; background:transparent; padding:0 12px; font-size:18px; font-weight:900; border-bottom:5px solid transparent; }
.nav-link.active { border-bottom-color:white; }
.header-actions { margin-left:auto; display:flex; align-items:center; gap:14px; }
.icon-button { color:white; background:transparent; border:0; font-size:28px; }
.submit-button { background:white; color:var(--blue); border:0; border-radius:11px; padding:13px 20px; font-size:17px; font-weight:900; box-shadow:var(--shadow); }

.layout { display: grid; grid-template-columns: 300px minmax(420px, 1fr) 300px; min-height: calc(100vh - 76px); max-width: 1440px; margin: 0 auto; }
.level-sidebar { border-right:1px solid var(--line); padding:28px 14px; }
.sidebar-title { color:var(--muted); font-size:12px; letter-spacing:1.5px; margin:0 0 16px 8px; }
.level-button { width:100%; display:flex; align-items:center; gap:18px; text-align:left; background:transparent; border:0; border-radius:10px; padding:12px 10px; color:var(--text); font-size:18px; font-weight:900; margin-bottom:3px; }
.level-button .rank { min-width:26px; }
.level-button.active { background:var(--blue); color:white; }

.main-content { 
  padding: 24px clamp(24px, 4vw, 70px) 60px; 
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

h1 { font-size: clamp(34px, 4vw, 58px); line-height: 1.1; margin: 0 0 18px; letter-spacing: -2px; }

.meta { 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  text-align: center;
  gap: 6px; 
  font-size: 17px; 
  margin-bottom: 28px; 
}
.meta strong { font-weight: 1000; }

.video-placeholder { 
  width: 100% !important; 
  max-width: 680px !important; 
  margin: 0 auto !important; 
  aspect-ratio: 16/9; 
  background: #101321; 
  display: grid; 
  place-items: center; 
  position: relative; 
  border-radius: 12px; 
  overflow: hidden; 
  box-shadow: var(--shadow);
}
.video-placeholder iframe,
.video-placeholder img {
  width: 100%;
  height: 100%;
  border: 0;
  object-fit: cover;
  display: block;
}
.video-placeholder span { z-index:1; font-size:clamp(24px,4vw,48px); font-weight:1000; text-shadow:0 3px 15px #000; text-align:center; padding:20px; color: white; }
.video-placeholder a { position:absolute; bottom:15px; right:18px; color:white; z-index:2; background: rgba(0,0,0,0.7); padding: 6px 12px; border-radius: 6px; text-decoration: none; font-size: 14px; }

.stats { display:grid; grid-template-columns:1fr 1.5fr 1fr; gap:14px; text-align:center; margin-top:26px; width: 100%; max-width: 680px; }
.stat { 
  min-width: 0; 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  text-align: center;
}
.stat b { display:block; font-size:16px; }
.stat span { display:block; overflow-wrap:anywhere; font-size:16px; margin-top:6px; }

.right-sidebar { border-left:1px solid var(--line); padding:32px 30px; }
.right-sidebar h2 { font-size:27px; margin:22px 0 18px; }
.right-sidebar p { font-size:17px; line-height:1.6; margin:8px 0; }
.credit { color:var(--muted); font-size:14px!important; }

.page-panel { background:var(--panel); border:1px solid var(--line); border-radius:14px; padding:24px; box-shadow:var(--shadow); width: 100%; max-width: 680px; text-align: left; }
.page-panel h1 { margin-bottom:22px; text-align: center; }
.table-row { display:grid; grid-template-columns:70px 1fr 120px; padding:14px 10px; border-bottom:1px solid var(--line); gap:10px; }
.table-row:first-of-type { color:var(--muted); font-size:13px; text-transform:uppercase; }
.action-button { background:var(--blue); color:white; border:0; border-radius:9px; padding:12px 18px; font-weight:900; }
.roulette-result { font-size:26px; margin:25px 0; }

dialog { border:0; border-radius:16px; padding:28px; width:min(460px, calc(100% - 30px)); background:var(--panel); color:var(--text); box-shadow:0 20px 80px #0005; }
dialog::backdrop { background:#080b14a8; }
dialog h2 { margin-top:0; }
dialog label { display:block; margin:14px 0; }
dialog input, dialog select { width:100%; padding:12px; border:1px solid var(--line); border-radius:8px; margin-top:6px; background:var(--bg); color:var(--text); }
.dialog-close { float:right; border:0; background:transparent; color:var(--text); font-size:28px; }
.form-note { color:var(--muted); font-size:12px; line-height:1.5; }

@media (max-width:1050px) {
  .layout { grid-template-columns:220px minmax(0,1fr); }
  .right-sidebar { display:none; }
  .topbar { gap:20px; }
}
@media (max-width:650px) {
  .topbar { height:auto; min-height:70px; padding:12px 14px; flex-wrap:wrap; gap:10px; }
  .brand { font-size:27px; }
  .brand small { font-size:13px; }
  .nav { order:3; width:100%; height:42px; justify-content:space-around; }
  .nav-link { font-size:14px; }
  .header-actions { gap:8px; }
  .submit-button { padding:10px 12px; font-size:13px; }
  .layout { display:block; }
  .level-sidebar { border-right:0; border-bottom:1px solid var(--line); padding:12px; }
  .sidebar-title { display:none; }
  #levelButtons { display:flex; overflow-x:auto; gap:6px; }
  .level-button { white-space:nowrap; width:auto; padding:10px 12px; font-size:14px; }
  .level-button .rank { min-width:auto; }
  .main-content { padding:22px 16px 45px; }
  .stats { grid-template-columns:1fr; text-align:center; }
}
