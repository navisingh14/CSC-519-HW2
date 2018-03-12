let subject = require('G:\\CSC 519 - DevOps\\TestGeneration\\mystery.js')
let mock = require('mock-fs');
try { subject.inc(99, -77); } catch (e) {} 
try { subject.inc(99, NaN); } catch (e) {} 
try { subject.inc(101, -77); } catch (e) {} 
try { subject.inc(101, NaN); } catch (e) {} 
try { subject.weird(98, 10, 32, "mode"); } catch (e) {} 
try { subject.weird(98, 10, 32, 'NEQ - mode'); } catch (e) {} 
try { subject.weird(98, 10, 32, 'street'); } catch (e) {} 
try { subject.weird(98, 10, 32, "strictly"); } catch (e) {} 
try { subject.weird(98, 10, 32, 'NEQ - strictly'); } catch (e) {} 
try { subject.weird(98, 10, 34, "mode"); } catch (e) {} 
try { subject.weird(98, 10, 34, 'NEQ - mode'); } catch (e) {} 
try { subject.weird(98, 10, 34, 'street'); } catch (e) {} 
try { subject.weird(98, 10, 34, "strictly"); } catch (e) {} 
try { subject.weird(98, 10, 34, 'NEQ - strictly'); } catch (e) {} 
try { subject.weird(98, 12, 32, "mode"); } catch (e) {} 
try { subject.weird(98, 12, 32, 'NEQ - mode'); } catch (e) {} 
try { subject.weird(98, 12, 32, 'street'); } catch (e) {} 
try { subject.weird(98, 12, 32, "strictly"); } catch (e) {} 
try { subject.weird(98, 12, 32, 'NEQ - strictly'); } catch (e) {} 
try { subject.weird(98, 12, 34, "mode"); } catch (e) {} 
try { subject.weird(98, 12, 34, 'NEQ - mode'); } catch (e) {} 
try { subject.weird(98, 12, 34, 'street'); } catch (e) {} 
try { subject.weird(98, 12, 34, "strictly"); } catch (e) {} 
try { subject.weird(98, 12, 34, 'NEQ - strictly'); } catch (e) {} 
try { subject.weird(100, 10, 32, "mode"); } catch (e) {} 
try { subject.weird(100, 10, 32, 'NEQ - mode'); } catch (e) {} 
try { subject.weird(100, 10, 32, 'street'); } catch (e) {} 
try { subject.weird(100, 10, 32, "strictly"); } catch (e) {} 
try { subject.weird(100, 10, 32, 'NEQ - strictly'); } catch (e) {} 
try { subject.weird(100, 10, 34, "mode"); } catch (e) {} 
try { subject.weird(100, 10, 34, 'NEQ - mode'); } catch (e) {} 
try { subject.weird(100, 10, 34, 'street'); } catch (e) {} 
try { subject.weird(100, 10, 34, "strictly"); } catch (e) {} 
try { subject.weird(100, 10, 34, 'NEQ - strictly'); } catch (e) {} 
try { subject.weird(100, 12, 32, "mode"); } catch (e) {} 
try { subject.weird(100, 12, 32, 'NEQ - mode'); } catch (e) {} 
try { subject.weird(100, 12, 32, 'street'); } catch (e) {} 
try { subject.weird(100, 12, 32, "strictly"); } catch (e) {} 
try { subject.weird(100, 12, 32, 'NEQ - strictly'); } catch (e) {} 
try { subject.weird(100, 12, 34, "mode"); } catch (e) {} 
try { subject.weird(100, 12, 34, 'NEQ - mode'); } catch (e) {} 
try { subject.weird(100, 12, 34, 'street'); } catch (e) {} 
try { subject.weird(100, 12, 34, "strictly"); } catch (e) {} 
try { subject.weird(100, 12, 34, 'NEQ - strictly'); } catch (e) {} 
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('pathContent/file1', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('pathContent/file1', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('pathContent/file1', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('pathContent/file1', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('pathContent/file1', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('pathContent/file1', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('pathContent/file1', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('pathContent/file1', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('pathContent/someDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('pathContent/someDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('pathContent/someDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('pathContent/someDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('pathContent/someDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('pathContent/someDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('pathContent/someDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('pathContent/someDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('file', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('file', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('file', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('file', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('file', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('file', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('file', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('file', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try { subject.normalize(''); } catch (e) {} 
try { subject.format('', '', options = {strongbow: true}); } catch (e) {} 
try { subject.format('', '', false); } catch (e) {} 
try { subject.blackListNumber(''); } catch (e) {} 
