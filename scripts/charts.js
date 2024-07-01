function loadCharts(elementId, dataFile) {
    d3.json(dataFile).then(data => {
        // Create charts using D3.js
        const svg = d3.select(`#${elementId}`)
            .append("svg")
            .attr("width", 600)
            .attr("height", 400);

        // Example chart: Bar chart for population over the years
        const margin = { top: 20, right: 30, bottom: 40, left: 40 },
            width = 600 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

        const x = d3.scaleBand()
            .domain(data.map(d => d.year))
            .range([margin.left, width - margin.right])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.population)]).nice()
            .range([height - margin.bottom, margin.top]);

        const xAxis = g => g
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x).tickSizeOuter(0));

        const yAxis = g => g
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y));

        svg.append("g")
            .selectAll("rect")
            .data(data)
            .join("rect")
            .attr("x", d => x(d.year))
            .attr("y", d => y(d.population))
            .attr("height", d => y(0) - y(d.population))
            .attr("width", x.bandwidth())
            .attr("fill", "steelblue");

        svg.append("g")
            .call(xAxis);

        svg.append("g")
            .call(yAxis);
    });
}
