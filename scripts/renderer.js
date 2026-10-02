class Renderer {
    // canvas:              object ({id: __, width: __, height: __})
    // num_curve_sections:  int
    constructor(canvas, num_curve_sections, show_points_flag) {
        this.canvas = document.getElementById(canvas.id);
        this.canvas.width = canvas.width;
        this.canvas.height = canvas.height;
        this.ctx = this.canvas.getContext('2d', {willReadFrequently: true});
        this.slide_idx = 0;
        this.num_curve_sections = num_curve_sections;
        this.show_points = show_points_flag;
    }

    // n:  int
    setNumCurveSections(n) {
        this.num_curve_sections = n;
        this.drawSlide(this.slide_idx);
    }

    // flag:  bool
    showPoints(flag) {
        this.show_points = flag;
        this.drawSlide(this.slide_idx);
    }
    
    // slide_idx:  int
    drawSlide(slide_idx) {
        this.slide_idx = slide_idx;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let framebuffer = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);

        switch (this.slide_idx) {
            case 0:
                this.drawSlide0(framebuffer);
                break;
            case 1:
                this.drawSlide1(framebuffer);
                break;
            case 2:
                this.drawSlide2(framebuffer);
                break;
            case 3:
                this.drawSlide3(framebuffer);
                break;
        }

        this.ctx.putImageData(framebuffer, 0, 0);
    }

    // framebuffer:  canvas ctx image data
    drawSlide0(framebuffer) {
        // TODO: draw at least 2 Bezier curves
        
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices

        let leaf_color = [0, 160, 80, 255];
        let sections = this.num_curve_sections;

        if (this.show_points) {
          
            // attempt to draw a clover leaf

            // Top leaf
            this.drawBezierCurve(
                {x: 380, y: 280},
                {x: 280, y: 220},
                {x: 290, y: 90},
                {x: 400, y: 120},
                sections,
                leaf_color,
                framebuffer
            );

            this.drawBezierCurve(
                {x: 400, y: 120},
                {x: 510, y: 90},
                {x: 520, y: 220},
                {x: 420, y: 280},
                sections,
                leaf_color,
                framebuffer
            );

            // Right leaf
            this.drawBezierCurve(
                {x: 420, y: 280},
                {x: 480, y: 180},
                {x: 610, y: 190},
                {x: 580, y: 300},
                sections,
                leaf_color,
                framebuffer
            );

            this.drawBezierCurve(
                {x: 580, y: 300},
                {x: 610, y: 410},
                {x: 480, y: 420},
                {x: 420, y: 320},
                sections,
                leaf_color,
                framebuffer
            );

            // Bottom leaf
            this.drawBezierCurve(
                {x: 420, y: 320},
                {x: 520, y: 380},
                {x: 510, y: 510},
                {x: 400, y: 480},
                sections,
                leaf_color,
                framebuffer
            );

            this.drawBezierCurve(
                {x: 400, y: 480},
                {x: 290, y: 510},
                {x: 280, y: 380},
                {x: 380, y: 320},
                sections,
                leaf_color,
                framebuffer
            );

            // Left leaf
            this.drawBezierCurve(
                {x: 380, y: 320},
                {x: 320, y: 420},
                {x: 190, y: 410},
                {x: 220, y: 300},
                sections,
                leaf_color,
                framebuffer
            );

            this.drawBezierCurve(
                {x: 220, y: 300},
                {x: 190, y: 190},
                {x: 320, y: 180},
                {x: 380, y: 280},
                sections,
                leaf_color,
                framebuffer
            );

        } 

        
        // Following line is example of drawing a single line
        // (this should be removed after you implement the curve)
        // this.drawLine({x: 100, y: 100}, {x: 600, y: 300}, [255, 0, 0, 255], framebuffer);
    }

    // framebuffer:  canvas ctx image data
    drawSlide1(framebuffer) {
        // TODO: draw at least 2 circles
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices

        let sections = this.num_curve_sections;

        let earth_color = [0, 100, 255, 255];
        let earth_land_color = [0, 180, 100, 255];
        let moon_color = [190, 190, 190, 255];
        let ring_color = [220, 180, 80, 255];
        let star_color = [255, 255, 255, 255];
            
        if (this.show_points) {
            // Earth
            this.drawCircle(
                {x: 300, y: 330},
                150,
                sections,
                earth_color,
                framebuffer
            );

            // Earth details: simple land-like circular shapes
            this.drawCircle(
                {x: 250, y: 280},
                35,
                sections,
                earth_land_color,
                framebuffer
            );

            this.drawCircle(
                {x: 350, y: 390},
                45,
                sections,
                earth_land_color,
                framebuffer
            );

            this.drawCircle(
                {x: 390, y: 260},
                25,
                sections,
                earth_land_color,
                framebuffer
            );

            // Large orbital ring around Earth
            this.drawCircle(
                {x: 300, y: 330},
                250,
                sections,
                ring_color,
                framebuffer
            );

            // Moon
            this.drawCircle(
                {x: 510, y: 200},
                55,
                sections,
                moon_color,
                framebuffer
            );

            // Moon craters
            this.drawCircle(
                {x: 510, y: 180},
                12,
                sections,
                moon_color,
                framebuffer
            );

            this.drawCircle(
                {x: 540, y: 220},
                16,
                sections,
                moon_color,
                framebuffer
            );

            this.drawCircle(
                {x: 505, y: 235},
                8,
                sections,
                moon_color,
                framebuffer
            );

        }

        
    }

    // framebuffer:  canvas ctx image data
    drawSlide2(framebuffer) {
        // TODO: draw at least 2 convex polygons (each with a different number of vertices >= 5)
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        
        
        // Following lines are example of drawing a single triangle
        let top_color = [255, 220, 100, 255];
        let front_color = [220, 80, 80, 255];
        let left_color = [80, 160, 220, 255];

        // Shared cube points
        let back_left = {x: 300, y: 180};
        let back_right = {x: 500, y: 180};
        let front_right = {x: 600, y: 240};
        let front_left = {x: 400, y: 240};

        let bottom_front_right = {x: 600, y: 440};
        let bottom_front_left = {x: 400, y: 520};
        let bottom_back_left = {x: 300, y: 460};

        if (this.show_points) {

            // left 
            this.drawConvexPolygon(
                [
                    back_left,
                    front_left,
                    bottom_front_left,
                    bottom_back_left
                ],
                left_color,
                framebuffer
            );
            this.drawConvexPolygon(
                [
                    back_left,
                    back_right,
                    front_right,
                    front_left
                ],
                top_color,
                framebuffer
            );

            this.drawConvexPolygon(
                [
                    front_left,
                    front_right,
                    bottom_front_right,
                    bottom_front_left
                ],
                front_color,
                framebuffer
            );

        }
    }

    // framebuffer:  canvas ctx image data
    drawSlide3(framebuffer) {
        // TODO: draw your name!
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        let color = [0, 128, 128, 255];
        let sections = this.num_curve_sections;

        // drawing NIKHIL
        if (this.show_points) {
            // N
            this.drawLine(
                {x: 50, y: 400},
                {x: 50, y: 200},
                color,
                framebuffer
            );

            this.drawLine(
                {x: 50, y: 400},
                {x: 130, y: 200},
                color,
                framebuffer
            );

            this.drawLine(
                {x: 130, y: 400},
                {x: 130, y: 200},
                color,
                framebuffer
            );

            // I
            this.drawLine(
                {x: 170, y: 200},
                {x: 250, y: 200},
                color,
                framebuffer
            );

            this.drawLine(
                {x: 210, y: 200},
                {x: 210, y: 400},
                color,
                framebuffer
            );

            this.drawLine(
                {x: 170, y: 400},
                {x: 250, y: 400},
                color,
                framebuffer
            );

            // K
            this.drawLine(
                {x: 290, y: 200},
                {x: 290, y: 400},
                color,
                framebuffer
            );

            this.drawBezierCurve(
                {x: 290, y: 300},
                {x: 320, y: 275},
                {x: 350, y: 220},
                {x: 380, y: 200},
                sections,
                color,
                framebuffer
            );

            this.drawBezierCurve(
                {x: 290, y: 300},
                {x: 320, y: 325},
                {x: 350, y: 380},
                {x: 380, y: 400},
                sections,
                color,
                framebuffer
            );

            // H
            this.drawLine(
                {x: 420, y: 200},
                {x: 420, y: 400},
                color,
                framebuffer
            );

            this.drawLine(
                {x: 500, y: 200},
                {x: 500, y: 400},
                color,
                framebuffer
            );

            this.drawLine(
                {x: 420, y: 300},
                {x: 500, y: 300},
                color,
                framebuffer
            );

            // I
            this.drawLine(
                {x: 550, y: 200},
                {x: 630, y: 200},
                color,
                framebuffer
            );

            this.drawLine(
                {x: 590, y: 200},
                {x: 590, y: 400},
                color,
                framebuffer
            );

            this.drawLine(
                {x: 550, y: 400},
                {x: 630, y: 400},
                color,
                framebuffer
            );

            // L
            this.drawLine(
                {x: 680, y: 205},
                {x: 680, y: 400},
                color,
                framebuffer
            );

            this.drawBezierCurve(
                {x: 680, y: 205},
                {x: 700, y: 235},
                {x: 740, y: 235},
                {x: 760, y: 205},
                sections,
                color,
                framebuffer
            );

            this.drawLine(
                {x: 680, y: 205},
                {x: 760, y: 205},
                color,
                framebuffer
            );
        }
        
    }

    // p0:           object {x: __, y: __}
    // p1:           object {x: __, y: __}
    // p2:           object {x: __, y: __}
    // p3:           object {x: __, y: __}
    // num_edges:    int
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawBezierCurve(p0, p1, p2, p3, num_edges, color, framebuffer) {
        // TODO: draw a sequence of straight lines to approximate a Bezier
        let previous = null
        
        let t = 0
        let slope = 1/num_edges
        
        
        for (let i = 0; i <= num_edges; i++) {
            let x = ((1-t)**3 )*p0.x + (3*(1-t)**2)*t*p1.x + (3*(1-t)*t**2)*p2.x + t**3*p3.x
            let y = ((1-t)**3 )*p0.y + (3*(1-t)**2)*t*p1.y + (3*(1-t)*t**2)*p2.y + t**3*p3.y

            let current = {x: Math.round(x), y: Math.round(y)}
    
            if (previous!= null) {
                this.drawLine(previous, current, color, framebuffer)
            }

            previous = current

            t = t + slope

        }

        
    }

    // center:       object {x: __, y: __}
    // radius:       int
    // num_edges:    int
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawCircle(center, radius, num_edges, color, framebuffer) {
        // TODO: draw a sequence of straight lines to approximate a circle

        let previous = null

        let start_angle = 0;
        let angle_increment = (2 * Math.PI) / num_edges;

        // need two points one is the center point and other one is center + radius 
        // making two vertices to find the angles

        for (let i = 0; i <= num_edges; i++) {

            let angle  = start_angle + i * angle_increment

            let x = center.x + (radius * Math.cos(angle))
            let y = center.y + (radius * Math.sin(angle))

            let current = {x: Math.round(x), y: Math.round(y)}
        
            if (previous != null) {
                this.drawLine(previous, current, color, framebuffer)
            }

            previous = current
        
        }
        
        
    }

    // vertex_list:  array of object [{x: __, y: __}, {x: __, y: __}, ..., {x: __, y: __}]
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawConvexPolygon(vertex_list, color, framebuffer) {
        // TODO: draw a sequence of triangles to form a convex polygon

        let total_triangles = vertex_list.length - 2

        for (let i = 0; i <= total_triangles; i++ ) {

            let point_a = vertex_list[0]
            let point_b = vertex_list[i]
            let point_c = vertex_list[i+1]

            this.drawTriangle(point_a, point_b, point_c, color, framebuffer);

        }
        
    }
    
    // v:            object {x: __, y: __}
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawVertex(v, color, framebuffer) {
        // TODO: draw some symbol (e.g. small rectangle, two lines forming an X, ...) centered at position `v`
        
        // the below code draws a plus
        // let size = 10

        // this.drawLine(
        //     {x: v.x - size, y: v.y},
        //     {x: v.x + size, y: v.y},
        //     color,
        //     framebuffer
        // );

        // this.drawLine(
        //     {x: v.x, y: v.y + size},
        //     {x: v.x, y: v.y - size},
        //     color,
        //     framebuffer
        // );

        // the below code draws a rectangle

        let size = 100

        // length
        this.drawLine(
            {x: v.x - size/2, y: v.y - size},
            {x: v.x - size/2, y: v.y + size},
            color,
            framebuffer
        );
        this.drawLine(
            {x: v.x + size/2, y: v.y - size},
            {x: v.x + size/2, y: v.y + size},
            color,
            framebuffer
        );

        // breadth
        this.drawLine(
            {x: v.x - size/2, y: v.y + size},
            {x: v.x + size/2, y: v.y + size},
            color,
            framebuffer
        );
        this.drawLine(
            {x: v.x - size/2, y: v.y - size},
            {x: v.x + size/2, y: v.y - size},
            color,
            framebuffer
        );




        
    }
    
    /***************************************************************
     ***       Basic Line and Triangle Drawing Routines          ***
     ***       (code provided from in-class activities)          ***
     ***************************************************************/
    pixelIndex(x, y, framebuffer) {
	    return 4 * y * framebuffer.width + 4 * x;
    }
    
    setFramebufferColor(color, x, y, framebuffer) {
	    let p_idx = this.pixelIndex(x, y, framebuffer);
        for (let i = 0; i < 4; i++) {
            framebuffer.data[p_idx + i] = color[i];
        }
    }
    
    swapPoints(a, b) {
        let tmp = {x: a.x, y: a.y};
        a.x = b.x;
        a.y = b.y;
        b.x = tmp.x;
        b.y = tmp.y;
    }

    drawLine(p0, p1, color, framebuffer) {
        if (Math.abs(p1.y - p0.y) <= Math.abs(p1.x - p0.x)) { // |m| <= 1
            if (p0.x < p1.x) {
                this.drawLineLow(p0.x, p0.y, p1.x, p1.y, color, framebuffer);
            }
            else {
                this.drawLineLow(p1.x, p1.y, p0.x, p0.y, color, framebuffer);
            }
        }
        else {                                                // |m| > 1
            if (p0.y < p1.y) {
                this.drawLineHigh(p0.x, p0.y, p1.x, p1.y, color, framebuffer);
            }
            else {
                this.drawLineHigh(p1.x, p1.y, p0.x, p0.y, color, framebuffer);
            }
        }
    }
    
    drawLineLow(x0, y0, x1, y1, color, framebuffer) {
        let A = y1 - y0;
        let B = x0 - x1;
        let iy = 1; // y increment (+1 for positive slope, -1 for negative slop)
        if (A < 0) {
            iy = -1;
            A *= -1;
        }
        let D = 2 * A + B;
        let D0 = 2 * A;
        let D1 = 2 * A + 2 * B;
    
        let y = y0;
        for (let x = x0; x <= x1; x++) {
            this.setFramebufferColor(color, x, y, framebuffer);
            if (D <= 0) {
                D += D0;
            }
            else {
                D += D1;
                y += iy;
            }
        }
    }
    
    drawLineHigh(x0, y0, x1, y1, color, framebuffer) {
        let A = x1 - x0;
        let B = y0 - y1;
        let ix = 1; // x increment (+1 for positive slope, -1 for negative slop)
        if (A < 0) {
            ix = -1;
            A *= -1;
        }
        let D = 2 * A + B;
        let D0 = 2 * A;
        let D1 = 2 * A + 2 * B;
    
        let x = x0;
        for (let y = y0; y <= y1; y++) {
            this.setFramebufferColor(color, x, y, framebuffer);
            if (D <= 0) {
                D += D0;
            }
            else {
                D += D1;
                x += ix;
            }
        }
    }
    
    drawTriangle(p0, p1, p2, color, framebuffer) {
        // Deep copy, then sort points in ascending y order
        p0 = {x: p0.x, y: p0.y};
        p1 = {x: p1.x, y: p1.y};
        p2 = {x: p2.x, y: p2.y};
        if (p1.y < p0.y) this.swapPoints(p0, p1);
        if (p2.y < p0.y) this.swapPoints(p0, p2);
        if (p2.y < p1.y) this.swapPoints(p1, p2);
        
        // Edge coherence triangle algorithm
        // Create initial edge table
        let edge_table = [
            {x: p0.x, inv_slope: (p1.x - p0.x) / (p1.y - p0.y)}, // edge01
            {x: p0.x, inv_slope: (p2.x - p0.x) / (p2.y - p0.y)}, // edge02
            {x: p1.x, inv_slope: (p2.x - p1.x) / (p2.y - p1.y)}  // edge12
        ];
        
        // Do cross product to determine if pt1 is to the right/left of edge02
        let v01 = {x: p1.x - p0.x, y: p1.y - p0.y};
        let v02 = {x: p2.x - p0.x, y: p2.y - p0.y};
        let p1_right = ((v01.x * v02.y) - (v01.y * v02.x)) >= 0;
        
        // Get the left and right edges from the edge table (lower half of triangle)
        let left_edge, right_edge;
        if (p1_right) {
            left_edge = edge_table[1];
            right_edge = edge_table[0];
        }
        else {
            left_edge = edge_table[0];
            right_edge = edge_table[1];
        }
        // Draw horizontal lines (lower half of triangle)
        for (let y = p0.y; y < p1.y; y++) {
            let left_x = parseInt(left_edge.x) + 1;
            let right_x = parseInt(right_edge.x);
            if (left_x <= right_x) { 
                this.drawLine({x: left_x, y: y}, {x: right_x, y: y}, color, framebuffer);
            }
            left_edge.x += left_edge.inv_slope;
            right_edge.x += right_edge.inv_slope;
        }
        
        // Get the left and right edges from the edge table (upper half of triangle) - note only one edge changes
        if (p1_right) {
            right_edge = edge_table[2];
        }
        else {
            left_edge = edge_table[2];
        }
        // Draw horizontal lines (upper half of triangle)
        for (let y = p1.y; y < p2.y; y++) {
            let left_x = parseInt(left_edge.x) + 1;
            let right_x = parseInt(right_edge.x);
            if (left_x <= right_x) {
                this.drawLine({x: left_x, y: y}, {x: right_x, y: y}, color, framebuffer);
            }
            left_edge.x += left_edge.inv_slope;
            right_edge.x += right_edge.inv_slope;
        }
    }
};

export { Renderer };
