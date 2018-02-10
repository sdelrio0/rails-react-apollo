Types::SubscriptionType = GraphQL::ObjectType.define do
  name 'Subscription'
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  # TODO: remove me
  field :testField, types.String do
    description 'An example field added by the generator'
    resolve ->(_obj, _args, _ctx) {
      'Subscription result!'
    }
  end
end
