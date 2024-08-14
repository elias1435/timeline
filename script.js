document.addEventListener("scroll", function () {
    const timelineLine = document.querySelector(".timeline-line");
    const timeline = document.querySelector(".timeline");

    // Calculate the height of the timeline container
    const timelineHeight = timeline.scrollHeight;
    
    // Get the scroll position relative to the top of the timeline
    const timelineTop = timeline.getBoundingClientRect().top + window.scrollY;
    const currentScroll = window.scrollY - timelineTop;

    // Calculate the start point (30% of window height)
    const startScroll = window.innerHeight * 0.3;

    // Adjust scroll percentage based on the start point
    if (window.scrollY + window.innerHeight * 0.7 > timelineTop) {
        const maxScroll = timelineHeight - window.innerHeight + startScroll;
        const scrollPercentage = ((currentScroll + startScroll) / maxScroll) * 100;

        // Constrain the height between 10% and 100%
        const constrainedHeight = Math.min(Math.max(scrollPercentage, 10), 100);

        timelineLine.style.height = `${constrainedHeight}%`;
    }
});
