(function() {

	const tooltipLinks = document.querySelectorAll(".iwTooltipLink");
	const input = document.querySelector("input");
	const output = document.querySelector("output");

	// Tooltip
	tooltipLinks.forEach(link => {

		let id = Math.random().toString(36).substr(2, 9);
		let tooltip;

		link.setAttribute('popovertarget', `tooltip-${id}`);
		link.style.anchorName = `--tooltipAnchor-${id}`;

		link.addEventListener("mouseenter", () => {
			const content = link.getAttribute('data-tooltip');

			if (!content) return;

			tooltip = document.createElement('div');
			tooltip.id = `tooltip-${id}`;
			tooltip.className = 'iwTooltip';
			tooltip.setAttribute('popover', '');
			tooltip.textContent = content;
			tooltip.style.positionAnchor = `--tooltipAnchor-${id}`;
			tooltip.style.transform = `translateX(-50%)`;
			link.parentElement.appendChild(tooltip);
			tooltip.showPopover();
		});

		link.addEventListener("mouseleave", () => {
			if (tooltip) {
				tooltip.hidePopover();
				tooltip.remove();
				tooltip = null;
			}
		});
	});


	//  Slider
	input.addEventListener("input", (event) => {
		output.innerText = `${input.value}`;
	});

})();