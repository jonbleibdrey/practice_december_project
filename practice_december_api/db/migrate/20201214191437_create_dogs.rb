class CreateDogs < ActiveRecord::Migration[6.0]
  def change
    create_table :dogs do |t|
      t.string :head
      t.string :chest
      t.string :leg
      t.belongs_to :body
      t.timestamps
    end
  end
end
