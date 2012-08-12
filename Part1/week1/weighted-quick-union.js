WQU = {
    data: [],
    indx: [],
    size: [],
    init: function (n) {
        for (var i = 0; i < n; i++) {
            this.data.push(i);
            this.indx.push(i);
            this.size.push(1);
        };
        console.log('init data: ', n);
        this.print('indx:', this.indx);
        this.print('data:', this.data);
        this.print('size:', this.size);
    },
    root: function (x) {
        return this.data[x] == x ? x : this.root(this.data[x]);
    },
    find: function (p, q) {
        return this.root(this.data[p]) == this.root(this.data[q]);
        
    },
    union: function (p, q) {
        var p_root = this.root(this.data[p]),
            q_root = this.root(this.data[q]);

        if (p_root == q_root)
            return;

        if (this.size[p_root] >= this.size[q_root]) {
            this.data[q_root] = p_root;
            this.size[p_root] += this.size[q_root];
        } else {
            this.data[p_root] = q_root;
            this.size[q_root] += this.size[p_root];
        }
        console.log('union(', p, q, ')')
        this.print('indx:', this.indx);
        this.print('data:', this.data);
        this.print('size:', this.size);
    },
    reset: function () {
        var n = this.indx.length;
        this.data = [];
        this.indx = [];
        this.size = [];
        this.init(n);
    },
    print: function (msg, arr) {
        for (var i = 0; i < arr.length; i++) {
            msg += arr[i] + ' ';
        };
        console.log(msg);
    },
}
//@ sourceURL=WQU.js