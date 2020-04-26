<? require_once './components/header.php' ?>

<div class="canvases">
	<div id="delete_confirm">
		<h2>Are you sure you want to clear this canvas?</h2>
		<div class="clear_buttons">
			<button id="confirm_delete">Yes</button>
			<button id="cancel_delete">No</button>
		</div>
	</div>
	<div id="create_modal">
		<div class="create_container">
			<h2>Тип таблицы</h2>
			<div class="row">
				<div class="col">
					<img src="./assets/img/canvases/canvas_1.png" alt="">
					<p>Business canvas</p>
				</div>
				<div class="col">
					<img src="./assets/img/canvases/canvas_2.png" alt="">
					<p>Lean canvas</p>
				</div>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="top_row">
			<div class="canvas_list">
				<div id="current_canvas">
					<h3>My Canvases</h3>
					<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 213.333 213.333" style="enable-background:new 0 0 213.333 213.333;" xml:space="preserve"><g><g><polygon points="0,53.333 106.667,160 213.333,53.333"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
				</div>
				<nav>
					<ul>
						<li class="current">
							<button>
								My Canvases
								<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0 c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7 C514.5,101.703,514.499,85.494,504.502,75.496z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
							</button>
						</li>
						<li><button>My Canvases 2</button></li>
						<li><button>My Canvases 3</button></li>
						<li><button>My Canvases 4</button></li>
						<li><button>+ Create New Workspace</button></li>
					</ul>
				</nav>
			</div>
		</div>
		<div class="all_canvases">
			<div id="create_canvas" class="canvas canvas_create">
				<h3>+</h3>
				<p>Create New</p>
			</div>
		</div>
	</div>
</div>

<? require_once './components/footer.php' ?>