/**
 * https://www.youtube.com/watch?v=20F_KzHPpvI
 * Folder View Structure like Vscode
 * 	- Folder will have option to add file or folder inside it
 */
import { useState } from 'react';
import { fileExplorerData } from '../../data';
import './fileExplorer.css';

const Folder = ({ explorer, handleInsertNode }) => {
	const [expand, setExpand] = useState(false);
	const [showInput, setShowInput] = useState({
		isVisible: false,
		isFolder: null
	});
	const handleAddFolder = (e, isFolder) => {
		e.stopPropagation();
		setExpand(true);
		setShowInput({
			...showInput,
			isVisible: true,
			isFolder
		});
	};

	const onAddFolder = (e) => {
		if (e.keyCode === 13 && e.target.value) {
			//keyCode == 13 means when "enter" is pressed
			handleInsertNode(explorer.id, e.target.value, showInput.isFolder);

			setShowInput({
				...showInput,
				isVisible: false
			});
		}
	};
	return (
		<>
			{explorer.isFolder ? (
				<div>
					<div>
						<span className="folder" onClick={() => setExpand(!expand)}>
							{explorer.name}
						</span>
						<span>
							<button onClick={(e) => handleAddFolder(e, true)}>Add Folder</button>
						</span>
						<span>
							<button onClick={(e) => handleAddFolder(e, false)}>Add File</button>
						</span>
					</div>
					{showInput.isVisible && (
						<input
							type="text"
							onBlur={() => setShowInput({ ...showInput, isVisible: false })}
							autoFocus
							onKeyDown={onAddFolder} //calls the function on every click of any key
						/>
					)}
					<div
						style={{
							paddingLeft: '15px',
							display: expand ? 'block' : 'none'
						}}>
						{explorer.items.map((ele) => (
							<Folder handleInsertNode={handleInsertNode} explorer={ele} key={ele.id} />
						))}
					</div>
				</div>
			) : (
				<div>
					<span className="file">{explorer.name}</span>
				</div>
			)}
		</>
	);
};
const FileExplorer = () => {
	const [explorerData, setExplorerData] = useState(fileExplorerData);

	const insertNode = (tree, folderId, item, isFolder) => {
		// base case
		if (tree.id === folderId && tree.isFolder) {
			tree.items.unshift({
				id: new Date().getTime(),
				name: item,
				isFolder,
				items: []
			});
			return tree;
		} else {
			/**
			 * DFS is being applied along with recursion
			 * latestNode will contain the updated tree for tree.items; so will returning, it is need to be spread with the parent tree
			 */
			let latestNode = [];
			latestNode = tree.items.map((ele) => {
				return insertNode(ele, folderId, item, isFolder);
			});
			return { ...tree, items: latestNode };
		}
	};

	const handleInsertNode = (folderId, item, isFolder) => {
		const finalTree = insertNode(explorerData, folderId, item, isFolder);
		setExplorerData(finalTree);
	};
	return <Folder explorer={explorerData} handleInsertNode={handleInsertNode} />;
};

export default FileExplorer;
