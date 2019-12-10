describe("OddEven", function() {
  var evenNum;
  var oddNum;
  beforeEach(function(){
    evenNum=20;
    oddNum=23;
  });

  xit("Number should be Even 1",function(){
    var result = oddOrEven(evenNum);
    expect(result).toBe('even');
  });

  it("Number should be Even 2",function(){
    var result = oddOrEven(evenNum);
    expect(result).not.toBe('odd');
  });


  it("Number should be Odd 1",function(){
    var result = oddOrEven(oddNum);
    expect(result).toBe('odd');
  });

  xit("Number should be Odd 2",function(){
    var result = oddOrEven(oddNum);
    expect(result).not.toBe('even');
  });

});
