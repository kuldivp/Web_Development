const insert=document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
    insert.innerHTML=`<div class='coler'>
    <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key===" "?"space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.Code}</td>
  </tr>
</table>
    </div>`;
});