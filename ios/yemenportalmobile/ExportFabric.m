#import "ExportFabric.h"

#import <Fabric/Fabric.h>
#import <Crashlytics/Crashlytics.h>

@implementation ExportFabric

RCT_EXPORT_MODULE(RNFabric);

RCT_EXPORT_METHOD(initWithCrashlytics)
{
  [Fabric with:@[[Crashlytics class]]];
}

@end
