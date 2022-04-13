function collides(a, b) {
    const a_cx = a.x + a.width / 2;
    const a_cy = a.y + a.height / 2;
    const b_cx = b.x + b.width / 2;
    const b_cy = b.y + b.height / 2;
    const a_rx = a.width / 2;
    const a_ry = a.height / 2;
    const b_rx = b.width / 2;
    const b_ry = b.height / 2;
    if (Math.abs(a_cx - b_cx) <= a_rx + b_rx)
        return true;
    if (Math.abs(a_cy - b_cy) <= a_ry + b_ry)
        return true;
}
export {};
