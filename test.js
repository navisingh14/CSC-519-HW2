let subject = require('G:\\CSC 519 - DevOps\\HW2 - Testgeneration\\CSC-519-HW2\\subject.js')
let mock = require('mock-fs');
try { subject.inc(-1, undefined); } catch (e) {} 
try { subject.inc(-1, NaN); } catch (e) {} 
try { subject.inc(1, undefined); } catch (e) {} 
try { subject.inc(1, NaN); } catch (e) {} 
try { subject.weird(6, -1, 41, "strict"); } catch (e) {} 
try { subject.weird(6, -1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, -1, 41, 'aaawerw'); } catch (e) {} 
try { subject.weird(6, -1, 41, "strict"); } catch (e) {} 
try { subject.weird(6, -1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, -1, 43, "strict"); } catch (e) {} 
try { subject.weird(6, -1, 43, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, -1, 43, 'aaawerw'); } catch (e) {} 
try { subject.weird(6, -1, 43, "strict"); } catch (e) {} 
try { subject.weird(6, -1, 43, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, 1, 41, "strict"); } catch (e) {} 
try { subject.weird(6, 1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, 1, 41, 'aaawerw'); } catch (e) {} 
try { subject.weird(6, 1, 41, "strict"); } catch (e) {} 
try { subject.weird(6, 1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, 1, 43, "strict"); } catch (e) {} 
try { subject.weird(6, 1, 43, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, 1, 43, 'aaawerw'); } catch (e) {} 
try { subject.weird(6, 1, 43, "strict"); } catch (e) {} 
try { subject.weird(6, 1, 43, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, -1, 41, "strict"); } catch (e) {} 
try { subject.weird(8, -1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, -1, 41, 'aaawerw'); } catch (e) {} 
try { subject.weird(8, -1, 41, "strict"); } catch (e) {} 
try { subject.weird(8, -1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, -1, 43, "strict"); } catch (e) {} 
try { subject.weird(8, -1, 43, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, -1, 43, 'aaawerw'); } catch (e) {} 
try { subject.weird(8, -1, 43, "strict"); } catch (e) {} 
try { subject.weird(8, -1, 43, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, 1, 41, "strict"); } catch (e) {} 
try { subject.weird(8, 1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, 1, 41, 'aaawerw'); } catch (e) {} 
try { subject.weird(8, 1, 41, "strict"); } catch (e) {} 
try { subject.weird(8, 1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, 1, 43, "strict"); } catch (e) {} 
try { subject.weird(8, 1, 43, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, 1, 43, 'aaawerw'); } catch (e) {} 
try { subject.weird(8, 1, 43, "strict"); } catch (e) {} 
try { subject.weird(8, 1, 43, 'NEQ - strict'); } catch (e) {} 
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('emptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('emptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('emptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('emptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('emptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('emptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('nonEmptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('nonEmptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('nonEmptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'file');
	mock.restore();
} catch(e) {}
try { subject.normalize(''); } catch (e) {} 
try { subject.format('', '', options = {'normalize': true}); } catch (e) {} 
try { subject.format('', '', false); } catch (e) {} 
try { subject.blackListNumber('NEQ - "212"'); } catch (e) {} 
try { subject.blackListNumber("2122634892"); } catch (e) {} 
