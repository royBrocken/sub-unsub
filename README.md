# A simple subscription tracker / unsubscriber
- For angular controllers that use unmanaged subscriptions in the controller code
- this.sub = [subscription to track]
- no other code necessary.

## Possible issues
- overriding onDestroy in component

## Example included
- FirstComponent extends subscription management base class
- SecondComponend is there to unload FirstComponent and initiate onDestroy unsubscribes