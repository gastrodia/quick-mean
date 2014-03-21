models，使用mogoose将数据库操作抽象化，使用其规定格式定义数据对象，完全不需要关心数据库的问题。

functions，在mogoose上又一层操作封装，主要是各种数据操作，将其封装，供不同的routes或者filters调用。

filters，一些复用route的合集，例如用户检查，权限检查，通用module，总之就是各种抽象。

routes，逻辑的最顶层，负责请求调度，一个请求经过filters，获取到通用数据，然后进去各自的routes，在routes里调用functions方法操作和获取models定义的数据。然后把数据显示在views上或者直接返回给用户。

views，在routes里调用，使用数据渲染页面

