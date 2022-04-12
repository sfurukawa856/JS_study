/*
エラー表示をコントロールできる関数
自分でthrowしているさかのぼる
**/
function displayName(name) {
	if (!name) {
		throw new Error('name is required');
	}

	console.log(`名前は${name}です`);
}
