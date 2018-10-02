function initShader(gl,VERTEX_SHADER,FRAG_SHADER) {

    var vertex = gl.createShader(gl.VERTEX_SHADER); //创建顶点着色器
    var frag = gl.createShader(gl.FRAGMENT_SHADER); //创建片元着色器

    gl.shaderSource(vertex,VERTEX_SHADER);// 指定顶点着色器对象
    gl.shaderSource(frag,FRAG_SHADER);// 指定片元着色器对象

    gl.compileShader(vertex);
    gl.compileShader(frag);// 编译顶点和片元这着色器

    var program = gl.createProgram();// 创建程序对象
    gl.attachShader(program,vertex); // 为程序对象分配顶点着色器
    gl.attachShader(program,frag);// 为程序对象分配片元着色器

    gl.linkProgram(program);// 链接程序对象
    gl.useProgram(program);// 告知使用对象
    bufferInit
    return program;

}

function bufferInit(gl,dataVertices,attri,program) {

    var buffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER,buffer);

    gl.bufferData(gl.ARRAY_BUFFER,dataVertices,gl.STATIC_DRAW);

    var a_pos = gl.getAttribLocation(program,attri);

    gl.vertexAttribPointer(a_pos,2,gl.FLOAT,false,0,0);

    gl.enableVertexAttribArray(a_pos);
}