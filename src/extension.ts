
'use strict';
import * as vscode from 'vscode';
import scansel from './commands/scansel.js';
import updatetoken from './updatetoken.js';
import lifetime from './commands/lifetime.js';

export function activate(context: vscode.ExtensionContext) {
	console.log('Extension "starcoderex" is now active!');
	if(vscode.workspace.getConfiguration("starcoderex").get("bearertoken") === "")
	{
		updatetoken();
	}
	let scandoc = vscode.commands.registerCommand('starcoderex.ScanSel', async () => {
			await scansel();
	});
	let realtime = vscode.commands.registerCommand('starcoderex.StartLifeTime', async () => {
			await lifetime();
	});
	context.subscriptions.push(scandoc);
}

// This method is called when your extension is deactivated
export function deactivate() {}
