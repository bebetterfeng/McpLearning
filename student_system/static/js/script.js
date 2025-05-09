document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const studentForm = document.getElementById('student-form');
    const studentList = document.getElementById('student-list');
    
    // 页面加载时获取学生列表
    fetchStudents();
    
    // 表单提交事件
    studentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const name = document.getElementById('name').value.trim();
        const age = document.getElementById('age').value;
        const score = document.getElementById('score').value;
        
        // 验证数据
        if (!name || !age || !score) {
            alert('请填写所有字段');
            return;
        }
        
        // 创建学生对象
        const student = {
            name: name,
            age: parseInt(age),
            score: parseFloat(score)
        };
        
        // 发送到服务器
        addStudent(student);
    });
    
    // 获取学生列表函数
    function fetchStudents() {
        fetch('/api/students')
            .then(response => response.json())
            .then(students => {
                renderStudentTable(students);
            })
            .catch(error => {
                console.error('获取学生列表失败:', error);
            });
    }
    
    // 添加学生函数
    function addStudent(student) {
        fetch('/api/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        })
        .then(response => response.json())
        .then(students => {
            // 清空表单
            studentForm.reset();
            // 更新学生列表
            renderStudentTable(students);
        })
        .catch(error => {
            console.error('添加学生失败:', error);
        });
    }
    
    // 渲染学生表格函数
    function renderStudentTable(students) {
        // 清空表格
        studentList.innerHTML = '';
        
        // 添加学生行
        students.forEach((student, index) => {
            const row = document.createElement('tr');
            
            // 设置行内容
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.score}</td>
            `;
            
            // 添加到表格
            studentList.appendChild(row);
        });
    }
});