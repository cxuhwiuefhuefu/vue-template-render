/*
 * @Author: Sunny
 * @Date: 2022-12-26 17:46:18
 * @LastEditors: Suuny
 * @LastEditTime: 2022-12-26 23:48:04
 * @Description: 
 * @FilePath: /vscode-render-template/extension.js
 */
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below

const fs = require('fs')
const config = require('./src/index')

const vscode = require('vscode'); // 注意 require('vscode') 是引入 "@types/vscode" 这个包。
const { resolve } = require('path');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) { // 通过这个函数，调用 registerCommand 注册命令后，调用函数内部方法

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscode-render-template" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('vscode-render-template.helloWorld', function (args) {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		// vscode.window.showInformationMessage('航哥牛逼!');
		// vscode.window.showErrorMessage('航哥牛逼!');

		console.log('args==>', args)

		useExtension (args) 
			.then(() => {
				vscode.window.showInformationMessage('开发 vscode 插件成功!');
			})
			.catch((error) => {
				new Error(error);
			})
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

const useExtension = (args) => {
	return new Promise((resolvem, reject) => {
		try {
			const path = vscode.workspace.rootPath

			if(!path) {
				vscode.window.showErrorMessage('请打开一个工作区！')
				reject('')
				return;
			}

			const selectPath = args.path
			const indexjsPath = `${selectPath}/index.vue`

			if(!fs.existsSync(indexjsPath)) {
				fs.writeFileSync(indexjsPath, config.myTemplate)
			}else {
				vscode.window.showErrorMessage('该目录下眼睛存在 index.vue 文件！')
				reject('');
				return;
			}

			resolve('')
		} catch(error) {
			reject(new Error('error'));
		}
	})
}

module.exports = {
	activate,
	deactivate
}
