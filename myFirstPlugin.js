var myFirstPlugin= function(container){
    var studentList=[];
return{
    reset:function(){
        studentList=[];
        let table=document.getElementById('tableListing').getElementsByTagName('tbody');
        table[0].innerHTML=""; 
        
            let row=table[0].insertRow(0);
            var cell=row.insertCell(0);
            cell.colSpan=3; cell.innerHTML="Empty record!";
    },
    htmlControl: function() {
        let newline=document.createElement('div');
        newline.style="clear:both";

    let input=document.createElement('input'); input.type='text';
    input.id='studentName'; input.placeholder="Enter name";

    let input2=document.createElement('input');input2.type='text';
    input2.id='marks'; input2.placeholder="Enter marks";
    
    let btn=document.createElement('button');btn.type='button';
    btn.id='btnAddMarks'; btn.textContent="Add to the list"; 
    let btn2=document.createElement('button');btn.type='button';
    btn2.id='btnReset'; btn2.textContent=" Reset ";
    let table=  document.createElement('table'); table.id="tableListing"; table.border=1; table.cellPadding=5; table.cellSpacing=5; 
    
    let header = table.createTHead(); 
    let row = header.insertRow(0); 
    row.insertCell(0).innerHTML="<b>RollNo.</b>";
    row.insertCell(1).innerHTML="<b>Student Name</b>";
    row.insertCell(2).innerHTML="<b>Marks%</b>";
    let body = table.createTBody();
    let cell2=body.insertRow(0).insertCell(0);
    cell2.colSpan=3;cell2.innerHTML="No record found.";
      if(container!=undefined && container!=''){  
        container=  document.getElementById(container);  
        container.appendChild(input);
        container.appendChild(input2);
        container.appendChild(btn);
        container.appendChild(btn2);
        container.appendChild(newline);
        container.appendChild(table);
        this.setEvent('btnAddMarks','btnReset');
      }
    },
    validate:function(name,marks){
        if(name.value.length<1 || marks.value.length<1)
        return false;
        else
        return true;
    },
    tableUIList:function(){
        let table=document.getElementById('tableListing').getElementsByTagName('tbody');
        table.innerHTML=""; let ctr=0;
        studentList.forEach(e => {
            let row=table.insertRow(ctr);
            row.insertCell(0).innerText=ctr;
            row.insertCell(1).innerText=e.Student;
            row.insertCell(2).innerText=e.Marks;
     });
     return table;
    },
    updateList:function(){ 
        let name=document.getElementById('studentName');
        let marks=document.getElementById('marks');
       //let isValid= this.validate(name,marks);
       if(name.value.length<1 || marks.value.length<1){alert('please enter valid input'); return;}      
        studentList.push({
            'ID':studentList.length+1,
          'Student':name.value,
          'Marks':marks.value
        }); 
        name.value="";
        marks.value="";
        //UI update
        let table=document.getElementById('tableListing').getElementsByTagName('tbody');
        table[0].innerHTML=""; 
        studentList.forEach(e => {
            let row=table[0].insertRow(0);
            row.insertCell(0).innerText=e.ID;
            row.insertCell(1).innerText=e.Student;
            row.insertCell(2).innerText=e.Marks;
     });
        console.log(studentList);
    },
    
    setEvent:function(btnForm,btnReset)
    {
        btnForm= document.getElementById(btnForm);
        btnForm.addEventListener('click', this.updateList);
        document.getElementById(btnReset).addEventListener('click', this.reset);
    },
}
}