QF = {
    data: [],
    indx: [],
    init: function (n) {
        for (var i = 0; i < n; i++) {
            this.data.push(i);
            this.indx.push(i);
        };
        console.log('Things:', this.data);
    },
    find: function (p, q) {
        if (this.data[p] == this.data[q]) {
            return true;
        }
        return false;
    },
    union: function (p, q) {
        var p_id = this.data[p],
            q_id = this.data[q];
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i] == p_id) {
                this.data[i] = q_id;
            }            
        };
        this.print();
    },
    reset: function(){
    	this.data = [];
    	this.indx = [];
        this.init(this.indx.length);
    },
    print: function () {
        console.log('indx: ', this.indx);
        console.log('data: ', this.data);
    },
}
//@ sourceURL=QF.js